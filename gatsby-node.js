const path = require("path");

exports.onCreateNode = ({ node, actions }) => {
  const { createNode, createNodeField } = actions;
  if (node.internal.type == "MarkdownRemark") {
    const slug = path.basename(path.dirname(node.fileAbsolutePath));
    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMarkdownRemark(sort: { frontmatter: { date: ASC } }) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "DD MMM, YYYY")
              tags
              legacy
            }
            html
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.edges.forEach((edge, idx) => {
    const prev = idx === 0 ? null : data.allMarkdownRemark.edges[idx - 1].node;
    const next =
      idx === data.allMarkdownRemark.edges.length - 1
        ? null
        : data.allMarkdownRemark.edges[idx + 1].node;

    const createPage = (path) =>
      actions.createPage({
        path: path,
        component: require.resolve(`./src/templates/blogPost.js`),
        context: { current: edge.node, prev, next },
      });

    const slug = edge.node.fields.slug;
    createPage(`blog/${slug}`);

    if (edge.node.frontmatter.legacy) {
      createPage(slug);
    }
  });
};
