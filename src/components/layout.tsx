import { Link, graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import { container } from "./layout.css"

interface FooterProps {
  author: string
  currentYear: string
}

interface LayoutQuery {
  site: {
    siteMetadata: {
      title: string
      author: string
      currentYear: string
    }
  }
}

const Header = () => (
  <header>
    <nav>
      <Link to="/">Blog</Link>
    </nav>
  </header>
)

const Footer = ({ author, currentYear }: FooterProps) => (
  <footer>
    <small>
      © {currentYear} {author}
    </small>
  </footer>
)

const Layout = ({ children }: { children: React.ReactNode }) => {
  const query = useStaticQuery<LayoutQuery>(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          currentYear
        }
      }
    }
  `)

  return (
    <div className={container}>
      <Header />
      {children}
      <Footer
        author={query.site.siteMetadata.author}
        currentYear={query.site.siteMetadata.currentYear}
      />
    </div>
  )
}

export default Layout
