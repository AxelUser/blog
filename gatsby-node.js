const path = require('path')

exports.onCreateNode = ({ node, actions }) => {
	const { createNode, createNodeField } = actions
	if (node.internal.type == "MarkdownRemark") {
		const slug = path.basename(path.dirname(node.fileAbsolutePath))
		createNodeField({
			node,
			name: "slug",
			value: slug
		})
	}
}

exports.createPages = async function ({ actions, graphql }) {
	const { data } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
			frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
				tags
            }
            html
			timeToRead
            fields {
              slug
            }
          }
        }
      }
    }`)
	
	data.allMarkdownRemark.edges.forEach((edge, idx) => {
		const prev = idx === 0 ? null : data.allMarkdownRemark.edges[idx - 1].node;
		const next = idx === data.allMarkdownRemark.edges.length - 1 ? null : data.allMarkdownRemark.edges[idx + 1].node;

		const slug = edge.node.fields.slug
		actions.createPage({
			path: `blog/${slug}`,
			component: require.resolve(`./src/templates/blogPost.js`),
			context: { current: edge.node, prev, next },
		})
	})
}