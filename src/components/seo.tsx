import { graphql, useStaticQuery } from "gatsby"
import React from "react"

type SeoProps = { title: string }

export function Seo(props: SeoProps) {
  const query = useStaticQuery<Queries.SeoMetaQuery>(graphql`
    query SeoMeta {
      site {
        siteMetadata {
          title
          googleSiteVerification
        }
      }
    }
  `)

  const title = props.title
    ? `${query?.site?.siteMetadata?.title} | ${props.title}`
    : query?.site?.siteMetadata?.title

  return (
    <>
      <title>{title}</title>
      <meta
        name="google-site-verification"
        content={query?.site?.siteMetadata?.googleSiteVerification || undefined}
      />
    </>
  )
}
