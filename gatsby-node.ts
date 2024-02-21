import type { GatsbyNode } from "gatsby"
import { createFilePath } from "gatsby-source-filesystem"
import path from "path"
import { BlogPostContext } from "./src/common/types"

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
      trailingSlash: false,
    })
    createNodeField({
      node,
      name: "path",
      value: `/blog${relativeFilePath}`,
    })
    createNodeField({
      node,
      name: "legacyPath",
      value: relativeFilePath,
    })
  }
}

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { data } = await graphql<Queries.AllBlogPostsQuery>(`
    query AllBlogPosts {
      allMdx(sort: { frontmatter: { date: ASC } }) {
        edges {
          node {
            id
            internal {
              contentFilePath
            }
            fields {
              legacyPath
              path
            }
            frontmatter {
              legacy
            }
          }
        }
      }
    }
  `)

  const template = path.resolve(`./src/templates/blogPost.tsx`)
  const pages = data?.allMdx.edges.flatMap(e => e.node)

  pages?.forEach((node, idx) => {
    const previous = idx !== 0 ? pages[idx - 1] : null
    const next = idx < pages.length - 1 ? pages[idx + 1] : null

    const createPage = (path: string) =>
      actions.createPage<BlogPostContext>({
        path: path,
        component: `${template}?__contentFilePath=${node.internal.contentFilePath}`,
        context: {
          id: node.id,
          previousId: previous?.id ?? "",
          nextId: next?.id ?? "",
        },
      })

    const { path, legacyPath } = node?.fields!
    if (path != null && legacyPath != null) {
      createPage(path)

      if (node?.frontmatter?.legacy) {
        createPage(legacyPath)
      }
    }
  })
}

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  ({ actions }) => {
    const { createTypes } = actions

    createTypes(`
      type SiteSiteMetadata {
        author: String!
        currentYear: Int!
      }

      type Mdx implements Node {
        frontmatter: Frontmatter!
        fields: Fields!
      }

      type Frontmatter {
        title: String!
        date: Date! @dateformat
        preview: String!
        tags: [String!]!
      }

      type Fields {
        path: String!
        legacyPath: String!
      }
    `)
  }
