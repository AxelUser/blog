import { HeadFC, PageProps, graphql } from "gatsby"
import * as React from "react"
import ContentPreview from "../components/contentPreview"
import Layout, { BioDisplay } from "../components/layout"
import { Seo } from "../components/seo"

const BlogPage: React.FC<PageProps<Queries.BlogPostListsQuery>> = ({
  data: {
    allMdx: { edges },
  },
}) => {
  return (
    <Layout displayBio={BioDisplay.BeforeContent}>
      <div>
        {edges.map(({ node }) => (
          <ContentPreview
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
