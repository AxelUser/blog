import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import TwitterSEO from './twitterSeo'

const SEO = ({title = null, description = null}) => (
  <StaticQuery
    query = {graphql`
      query SEOQuery {
        site {
          siteMetadata {
            defaultTitle: title,
            defaultDescription: description,
            image,
            twitter
          }
        }
      }
    `}

    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          defaultDescription,
          image,
          twitter
        },
      },
    }) => {
      var seo = {
        title: title || defaultTitle,
        description: description || defaultDescription
      }
      return (
        <>
          <Helmet title={seo.title}>
              <meta name="google-site-verification" content="8Dy4lxRZAH8BAi86GsiP9mlM_ELJLCh839CXT3W32SI" />
              <meta name="description" content={seo.description}/>
              <meta name="image" content={image}/>
          </Helmet>
          <TwitterSEO username={twitter}/>
        </>
      )
    }}
  />
)

export default SEO;