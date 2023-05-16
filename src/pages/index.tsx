import { HeadFC, PageProps, graphql } from "gatsby"
import * as React from "react"
import Bio from "../components/bio"
import BlogPostPreview from "../components/blogPostPreview"
import Layout from "../components/layout"
import { Seo } from "../components/seo"

const BlogPage: React.FC<PageProps<Queries.BlogPostListsQuery>> = ({
  data: {
    allMdx: { edges },
  },
}) => {
  return (
    <Layout>
      <Bio />
      <div>
        {edges.map(({ node }) => (
          <BlogPostPreview
            title={node?.frontmatter?.title || ""}
            description={node?.frontmatter?.preview || ""}
            date={node?.frontmatter?.date || ""}
            tags={
              node?.frontmatter?.tags?.filter((t): t is string => t != null) ||
              []
            }
            link={`/blog/${node?.fields?.slug}`}
          />
        ))}
      </div>
    </Layout>
  )
}

export default BlogPage

export const Head: HeadFC = () => {
  return <Seo title="Blog" />
}

export const query = graphql`
  query BlogPostLists {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            preview
            date(formatString: "DD MMM, YYYY")
            tags
            legacy
          }
        }
      }
    }
  }
`
