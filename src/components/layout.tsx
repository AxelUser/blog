import { Link, graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import { container, themeToggle } from "./layout.css"

interface FooterProps {
  author: string
  currentYear: number
}

const Header = () => (
  <header>
    <nav>
      <Link to="/">Blog</Link>
    </nav>
    <ModeToggle />
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
      {children}
      <Footer
        author={query?.site?.siteMetadata?.author || ""}
        currentYear={query?.site?.siteMetadata?.currentYear || 0}
      />
    </div>
  )
}

function getDefaultTheme(): boolean {
  const savedTheme = window.localStorage.getItem("theme")
  return savedTheme == "dark"
}

const ModeToggle = () => {
  const [isDark, setIsDark] = React.useState(getDefaultTheme())

  React.useEffect(() => {
    if (isDark === true) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }

    window.localStorage.setItem("theme", isDark ? "dark" : "light")
  }, [isDark])

  return (
    <span className={themeToggle} onClick={() => setIsDark(!isDark)}>
      {isDark ? "Light" : "Dark"}
    </span>
  )
}

export default Layout
