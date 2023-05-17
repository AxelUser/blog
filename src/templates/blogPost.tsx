import { HeadFC, graphql } from "gatsby"
import * as React from "react"
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
          <Tags tags={[...current!.frontmatter.tags]} />
        </span>
        <h1>{current?.frontmatter.title}</h1>
        <div className={text}>{children}</div>
        <Navigation
          prev={
            previous != null
              ? {
                  link: previous.fields.path,
                  title: previous.frontmatter.title,
                }
              : undefined
          }
          next={
            next != null
              ? {
                  link: next.fields.path,
                  title: next.frontmatter.title,
                }
              : undefined
          }
        />
      </div>
      <Bio />
    </Layout>
  )
}

export const Head: HeadFC<Queries.BlogPostByIdQuery> = ({ data }) => {
  return <Seo title={data.current!.frontmatter.title} />
}

export const pageQuery = graphql`
  query BlogPostById($id: String!, $previousId: String, $nextId: String) {
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
    previous: mdx(id: { eq: $previousId }) {
      id
      fields {
        path
      }
      frontmatter {
        title
      }
    }

    next: mdx(id: { eq: $nextId }) {
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
