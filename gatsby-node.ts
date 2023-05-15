import type { GatsbyNode } from "gatsby"
import { createFilePath } from "gatsby-source-filesystem"
import path from "path"
import { BlogPostContext, BlogPostNode } from "./src/types/blogPost"

export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  getNode,
  actions,
}) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: "src/content",
    })
    createNodeField({
      node,
      name: "slug",
      value: relativeFilePath,
    })
  }
}

type AllBlogPosts = {
  allMarkdownRemark: {
    edges: {
      node: BlogPostNode
    }[]
  }
}

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { data } = await graphql<AllBlogPosts>(`
    query AllBlogPosts {
      allMarkdownRemark(sort: { frontmatter: { date: ASC } }) {
        edges {
          node {
            html
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "DD MMM, YYYY")
              tags
              legacy
            }
          }
        }
      }
    }
  `)

  const template = path.resolve(`./src/templates/blogPost.tsx`)
  data?.allMarkdownRemark.edges.forEach((edge, idx) => {
    const prev =
      idx === 0 ? undefined : data.allMarkdownRemark.edges[idx - 1].node
    const next =
      idx === data.allMarkdownRemark.edges.length - 1
        ? undefined
        : data.allMarkdownRemark.edges[idx + 1].node

    const createPage = (postPath: string) =>
      actions.createPage<BlogPostContext>({
        path: postPath,
        component: template,
        context: { current: edge.node, prev, next },
      })

    const slug = edge.node.fields.slug
    createPage(`blog/${slug}`)

    if (edge.node.frontmatter.legacy) {
      createPage(slug)
    }
  })
}
