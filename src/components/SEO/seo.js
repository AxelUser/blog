import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const SEO = () => (
  <StaticQuery
    query = {graphql`
      query SEOQuery {
        site {
          siteMetadata {
            title,
            description,
            image
          }
        }
      }
    `}

    render={({
      site: {
        siteMetadata: {
          title,
          description,
          image
        },
      },
    }) => (
      <Helmet title={title}>
          <meta name="google-site-verification" content="8Dy4lxRZAH8BAi86GsiP9mlM_ELJLCh839CXT3W32SI" />
          <meta name="description" content={description}/>
          <meta name="image" content={image}/>
      </Helmet>
    )}
  />
)

export default SEO;