import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { withPrefix } from 'gatsby'

import Header from '../Header/header'
import SEO from '../SEO/seo';

const Layout = ({ children }) => (
  <>
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />        

      {/* Favicon stuff from realfavicongenerator.net */}
      <link rel="apple-touch-icon" sizes="180x180" href={withPrefix('/apple-touch-icon.png')}/>
      <link rel="icon" type="image/png" sizes="32x32" href={withPrefix('/favicon-32x32.png')}/>
      <link rel="icon" type="image/png" sizes="16x16" href={withPrefix('/favicon-16x16.png')}/>
      <link rel="mask-icon" href={withPrefix('/safari-pinned-tab.svg')} color="#5bbad5"/>
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="theme-color" content="#ffffff"/>
    </Helmet>
    <SEO/>
    <Header/>
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
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
