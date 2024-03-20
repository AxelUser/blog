import { Link, graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import Bio from "./bio"
import { container, navBar, navBarLink } from "./layout.css"

interface FooterProps {
  author: string
  currentYear: number
}

const Header = () => (
  <header>
    <nav className={navBar}>
      <Link className={navBarLink} to="/">
        Blog
      </Link>
      <Link className={navBarLink} to="/art">
        Art
      </Link>
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

export enum BioDisplay {
  BeforeContent,
  AfterContent,
}

export type LayoutProps = {
  displayBio?: BioDisplay
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ displayBio, children }) => {
  const query = useStaticQuery<Queries.SiteMetaQuery>(graphql`
    query SiteMeta {
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
      {displayBio == BioDisplay.BeforeContent && <Bio />}
      {children}
      {displayBio == BioDisplay.AfterContent && <Bio />}
      <Footer
        author={query?.site?.siteMetadata?.author || ""}
        currentYear={query?.site?.siteMetadata?.currentYear || 0}
      />
    </div>
  )
}

export default Layout
