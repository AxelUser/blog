import React from 'react'
import { Link } from 'gatsby'
import styles from './css/header.module.css'

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
    </div>
  </div>
)

export default Header
