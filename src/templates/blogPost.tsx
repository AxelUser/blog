import * as React from "react"
import { BlogPostContext } from "../types/blogPost"
import { HeadFC } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Tags from "../components/tags"
import { container, meta, text } from "./blogPost.css"
import { Seo } from "../components/seo"
import Navigation from "../components/navigation"

const BlogPostTemplate = ({
  pageContext: { current, prev, next },
}: {
  pageContext: BlogPostContext
}) => {
  return (
    <Layout>
      <div className={container}>
        <span className={meta}>
          <time>{current.frontmatter.date}</time>
          <Tags tags={current.frontmatter.tags} />
        </span>
        <h1>{current.frontmatter.title}</h1>
        <div
          className={text}
          dangerouslySetInnerHTML={{ __html: current.html }}
        />
        <Navigation prev={prev} next={next} />
      </div>
      <Bio />
    </Layout>
  )
}

export const Head: HeadFC<{}, BlogPostContext> = ({
  pageContext: { current },
}) => {
  return <Seo title={current.frontmatter.title} />
}

export default BlogPostTemplate
