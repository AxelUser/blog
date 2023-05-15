import { graphql, useStaticQuery } from "gatsby"
import React from "react"

type SeoProps = { title: string }

type Query = {
  site: {
    siteMetadata: {
      title: string
      googleSiteVerification: string
    }
  }
}

export function Seo(props: SeoProps) {
  const query = useStaticQuery<Query>(graphql`
    query {
      site {
        siteMetadata {
          title
          googleSiteVerification
        }
      }
    }
  `)

  const title = props.title
    ? `${query.site.siteMetadata.title} | ${props.title}`
    : query.site.siteMetadata.title

  return (
    <>
      <title>{title}</title>
      <meta
        name="google-site-verification"
        content={query.site.siteMetadata.googleSiteVerification}
      />
    </>
  )
}
