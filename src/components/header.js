import React from 'react'
import { Link } from 'gatsby'
import styles from './css/header.module.less'
import TwitterIcon from '../images/social/twitter.svg'
import GitHubIcon from '../images/social/github.svg'
import LinkedInIcon from '../images/social/linkedin.svg'

const Header = ({ siteTitle }) => (
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
      <div className={styles.socialBlock}>
        <a href="https://linkedin.com/in/dev-alexey-maltsev">
          <LinkedInIcon className={styles.socialIcon}/>
        </a>
        <a href="https://github.com/AxelUser">
          <GitHubIcon className={styles.socialIcon}/>
        </a>
        <a href="https://twitter.com/axel_user">
          <TwitterIcon className={styles.socialIcon}/>
        </a>
      </div>
    </div>
  </div>
)

export default Header
