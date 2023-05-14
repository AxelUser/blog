import { Link } from "gatsby"
import * as React from "react"
import { BlogPostNode } from "../types/blogPost"
import { linkNext, navigation } from "./navigation.css"

interface NavLinkProps extends React.HTMLAttributes<HTMLSpanElement> {
  prefix: string
  to?: BlogPostNode
}

const NavigationLink: React.FC<NavLinkProps> = ({ prefix, to, ...rest }) => {
  if (to) {
    return (
      <span {...rest}>
        <Link to={`/blog/${to.fields.slug}`}>
          {prefix}: {to.frontmatter.title}
        </Link>
      </span>
    )
  }

  return <></>
}

const Navigation: React.FC<{
  prev: BlogPostNode | undefined
  next: BlogPostNode | undefined
}> = ({ prev, next }) => {
  return (
    <nav className={navigation}>
      <NavigationLink prefix="Previous" to={prev} />
      <NavigationLink prefix="Next" to={next} className={linkNext} />
    </nav>
  )
}

export default Navigation
