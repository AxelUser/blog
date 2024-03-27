import { Link } from "gatsby"
import * as React from "react"
import { container, navCard, navDirectionInfo, navLink } from "./navigation.css"

type PageLinkInfo = {
  title: string
  link: string
}

interface NavLinkProps extends React.HTMLAttributes<HTMLSpanElement> {
  prefix: string
  to?: PageLinkInfo
}

const NavigationLink: React.FC<NavLinkProps> = ({ prefix, to }) => {
  if (to) {
    return (
      <Link to={to.link} className={navCard}>
        <span className={navDirectionInfo}>{prefix}</span>
        <span className={navLink}>{to.title}</span>
      </Link>
    )
  }

  return <></>
}

const Navigation: React.FC<{
  prev?: PageLinkInfo
  next?: PageLinkInfo
}> = ({ prev, next }) => {
  return (
    <nav className={container}>
      <NavigationLink prefix="Previous" to={prev} />
      <NavigationLink prefix="Next" to={next} />
    </nav>
  )
}

export default Navigation
