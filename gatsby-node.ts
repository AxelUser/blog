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
    })
    createNodeField({
      node,
      name: "slug",
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
  data?.allMdx.edges.forEach(({ node }, idx) => {
    const prev = idx === 0 ? undefined : data.allMdx.edges[idx - 1].node
    const next =
      idx === data.allMdx.edges.length - 1
        ? undefined
        : data.allMdx.edges[idx + 1].node

    const createPage = (prefix?: string) =>
      actions.createPage<BlogPostContext>({
        path: `${prefix}/${node?.fields?.slug}`,
        component: `${template}?__contentFilePath=${node.internal.contentFilePath}`,
        context: {
          current: {
            title: node.frontmatter?.title || "",
            date: node.frontmatter?.date || "",
            tags:
              node.frontmatter?.tags?.filter((t): t is string => t != null) ||
              [],
            link: `/blog/${node?.fields?.slug}`,
          },
          prev:
            prev != null
              ? {
                  title: prev.frontmatter?.title || "",
                  date: prev.frontmatter?.date || "",
                  tags:
                    prev.frontmatter?.tags?.filter(
                      (t): t is string => t != null
                    ) || [],
                  link: `/blog/${prev?.fields?.slug}`,
                }
              : undefined,
          next:
            next != null
              ? {
                  title: next.frontmatter?.title || "",
                  date: next.frontmatter?.date || "",
                  tags:
                    next.frontmatter?.tags?.filter(
                      (t): t is string => t != null
                    ) || [],
                  link: `/blog/${next?.fields?.slug}`,
                }
              : undefined,
        },
      })

    const slug = node?.fields?.slug
    if (slug != null) {
      createPage("/blog")

      if (node?.frontmatter?.legacy) {
        createPage()
      }
    }
  })
}
