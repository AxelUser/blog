import { HeadFC, PageProps, graphql } from "gatsby"
import * as React from "react"
import Bio from "../components/bio"
import BlogPostPreview from "../components/blogPostPreview"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import Grid from "../components/visualization/grid"

const BlogPage: React.FC<PageProps<Queries.BlogPostListsQuery>> = ({
  data: {
    allMdx: { edges },
  },
}) => {
  return (
    <Layout>
      <Bio />
      <Grid height={200} width={300} cols={2} rows={2} />
      <div>
        {edges.map(({ node }) => (
          <BlogPostPreview
            title={node.frontmatter.title}
            description={node.frontmatter.preview}
            date={node.frontmatter.date}
            tags={
              node?.frontmatter?.tags?.filter((t): t is string => t != null) ||
              []
            }
            link={node.fields.path}
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
            path
          }
          frontmatter {
            title
            preview
            date(formatString: "DD MMM, YYYY")
            tags
          }
        }
      }
    }
  }
`
