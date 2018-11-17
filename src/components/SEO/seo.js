import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import TwitterSEO from './twitterSEO'

const SEO = ({title = null, description = null}) => (
  <StaticQuery
    query = {graphql`
      query SEOQuery {
        site {
          siteMetadata {
            siteName,
            titleTemplate,
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
          siteName,
          titleTemplate,
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
          <Helmet 
            title={seo.title}
            titleTemplate={titleTemplate}
          >
              <meta name="google-site-verification" content="8Dy4lxRZAH8BAi86GsiP9mlM_ELJLCh839CXT3W32SI" />
              <meta name="description" content={seo.description}/>
              <meta name="image" content={image}/>

              {/*Open Graph*/}
              <meta property="og:site_name" content={siteName}/>
              <meta property="og:title" content={seo.title}/>
              <meta property="og:description" content={seo.description}/>
              <meta property="og:image" content={image}/>
          </Helmet>
          <TwitterSEO username={twitter}/>
        </>
      )
    }}
  />
)

const PublicationSEO = ({publicationDate = null, tags = []}) => (
  <>
    <Helmet>
      <meta property="og:type" content={"article"}/>
      <meta property="article:published_time" content={publicationDate}/>
      {tags.map((tag, index) => <meta key={index} property="article:tag" content={tag}/>)}
    </Helmet>
  </>
)

export default SEO;

export {SEO, PublicationSEO}