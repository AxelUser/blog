import { HeadFC, graphql } from "gatsby"
import * as React from "react"
import { BlogPostContext } from "../common/types"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Navigation from "../components/navigation"
import { Seo } from "../components/seo"
import Tags from "../components/tags"
import { container, meta, text } from "./blogPost.css"

const BlogPostTemplate = ({
  data: { current, next, previous },
  children,
}: {
  data: Queries.BlogPostByIdQuery
  children: any
}) => {
  return (
    <Layout>
      <div className={container}>
        <span className={meta}>
          <time>{current!.frontmatter.date}</time>
          <Tags tags={current!.frontmatter.tags} />
        </span>
        <h1>{current?.frontmatter.title}</h1>
        <div className={text}>{children}</div>
        <Navigation prev={previous} next={next} />
      </div>
      <Bio />
    </Layout>
  )
}

export const Head: HeadFC<{}, BlogPostContext> = ({
  pageContext: { id, nextId, previousId },
}) => {
  return <Seo title={id} />
}

export const pageQuery = graphql`
  query BlogPostById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    current: mdx(id: { eq: $id }) {
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
    previous: mdx(id: { eq: $previousPostId }) {
      id
      fields {
        path
      }
      frontmatter {
        title
      }
    }

    next: mdx(id: { eq: $nextPostId }) {
      id
      fields {
        path
      }
      frontmatter {
        title
      }
    }
  }
`

export default BlogPostTemplate
