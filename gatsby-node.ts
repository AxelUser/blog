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
  if (node.internal.type === "Mdx") {
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
  allMdx: {
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
      allMdx(sort: { frontmatter: { date: ASC } }) {
        edges {
          node {
            internal {
              contentFilePath
            }
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
  data?.allMdx.edges.forEach((edge, idx) => {
    const prev = idx === 0 ? undefined : data.allMdx.edges[idx - 1].node
    const next =
      idx === data.allMdx.edges.length - 1
        ? undefined
        : data.allMdx.edges[idx + 1].node

    const createPage = (postPath: string) =>
      actions.createPage<BlogPostContext>({
        path: postPath,
        component: `${template}?__contentFilePath=${edge.node.internal.contentFilePath}`,
        context: { current: edge.node, prev, next },
      })

    const slug = edge.node.fields.slug
    createPage(`blog/${slug}`)

    if (edge.node.frontmatter.legacy) {
      createPage(slug)
    }
  })
}
