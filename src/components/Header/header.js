import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import styles from './header.module.less'

const Header = () => (
  <StaticQuery 
    query={graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            siteName
          }
        }
      }
    `}

    render={({
      site: {
        siteMetadata: {
          siteName
        }
      }
    }) => (<HeaderForTitle siteTitle={siteName}/>)}
  />
)

const HeaderForTitle = ({ siteTitle }) => (
  <div
    className = {styles.headerBlock}
  >
    <div
      className = {styles.headerTitle}
    >
      <h1>
        <Link
          to="/"
          className={styles.headerMainLink}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
