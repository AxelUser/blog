import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, withPrefix } from 'gatsby'

import Header from '../Header/header'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />

          {/* Favicon stuff from realfavicongenerator.net */}
          <link rel="apple-touch-icon" sizes="180x180" href={withPrefix('/apple-touch-icon.png')}/>
          <link rel="icon" type="image/png" sizes="32x32" href={withPrefix('/favicon-32x32.png')}/>
          <link rel="icon" type="image/png" sizes="16x16" href={withPrefix('/favicon-16x16.png')}/>
          <link rel="mask-icon" href={withPrefix('/safari-pinned-tab.svg')} color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"/>
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
