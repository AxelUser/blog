const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`query AllPosts {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: ASC}) {
        edges {
          node {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }`).then(result => {
      var posts = result.data.allMarkdownRemark.edges;
      posts.forEach(({ node }, index) => {
        const prev = index === 0 ? null : posts[index - 1].node;
        const next =
          index === posts.length - 1 ? null : posts[index + 1].node;
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/BlogPost/blogPostTemplate.jsx`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
            prev: prev,
            next: next
          },
        })
      })
      resolve()
    })
  })
}