import { HeadFC, Link, PageProps } from "gatsby"
import * as React from "react"
import { Seo } from "../components/seo"
import { container } from "../styles/not-found.css"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main>
      <div className={container}>
        <h1>Page not found</h1>
        <small>or maybe it's hidden somewhere</small>
        <Link to="/">Go back to light</Link>
      </div>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => {
  return <Seo title="Not found" />
}
