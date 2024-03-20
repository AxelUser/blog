import { HeadFC, Link, PageProps } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import { backLink, container } from "../styles/404.css"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className={container}>
        <h1>Page not found</h1>
        <small>or maybe it's hidden somewhere</small>
        <Link className={backLink} to="/">
          Go back to light
        </Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => {
  return <Seo title="Not found" />
}
