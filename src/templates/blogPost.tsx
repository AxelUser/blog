import { HeadFC } from "gatsby"
import * as React from "react"
import { BlogPostContext } from "../common/types"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Navigation from "../components/navigation"
import { Seo } from "../components/seo"
import Tags from "../components/tags"
import { container, meta, text } from "./blogPost.css"

const BlogPostTemplate = ({
  pageContext: { current, prev, next },
  children,
}: {
  pageContext: BlogPostContext
  children: any
}) => {
  return (
    <Layout>
      <div className={container}>
        <span className={meta}>
          <time>{current.date}</time>
          <Tags tags={current.tags} />
        </span>
        <h1>{current.title}</h1>
        <div className={text}>{children}</div>
        <Navigation prev={prev} next={next} />
      </div>
      <Bio />
    </Layout>
  )
}

export const Head: HeadFC<{}, BlogPostContext> = ({
  pageContext: { current },
}) => {
  return <Seo title={current.title} />
}

export default BlogPostTemplate
