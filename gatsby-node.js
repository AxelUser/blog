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
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.fields.slug
    actions.createPage({
      path: `blog/${slug}`,
      component: require.resolve(`./src/templates/blogPost.js`),
      context: { slug: slug },
    })
  })
}