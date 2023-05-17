import { Link } from "gatsby"
import * as React from "react"
import { PageLinkInfo } from "../common/types"
import { linkNext, navigation } from "./navigation.css"

interface NavLinkProps extends React.HTMLAttributes<HTMLSpanElement> {
  prefix: string
  to?: PageLinkInfo
}

const NavigationLink: React.FC<NavLinkProps> = ({ prefix, to, ...rest }) => {
  if (to) {
    return (
      <span {...rest}>
        <Link to={to.link}>
          {prefix}: {to.title}
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
    <nav className={navigation}>
      <NavigationLink prefix="Previous" to={prev} />
      <NavigationLink prefix="Next" to={next} className={linkNext} />
    </nav>
  )
}

export default Navigation
