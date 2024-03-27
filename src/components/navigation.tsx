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
      <span className={navCard}>
        <span className={navDirectionInfo}>{prefix}</span>
        <Link className={navLink} to={to.link}>
          {to.title}
        </Link>
      </span>
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
