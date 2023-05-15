import { HeadFC, PageProps, graphql } from "gatsby"
import * as React from "react"
import Bio from "../components/bio"
import BlogPostPreview from "../components/blogPostPreview"
import Layout from "../components/layout"
import { Seo } from "../components/seo"

type BlogData = {
  allMarkdownRemark: {
    edges: {
      node: {
        id: string
        frontmatter: {
          title: string
          tags: string[]
          date: string
          preview: string
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const BlogPage: React.FC<PageProps<BlogData>> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout>
      <Bio />
      <div>
        {edges.map(({ node }) => (
          <BlogPostPreview
            title={node.frontmatter.title}
            description={node.frontmatter.preview}
            date={node.frontmatter.date}
            tags={node.frontmatter.tags}
            link={`/blog/${node.fields.slug}`}
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
    allMarkdownRemark(
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
