import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styles from './footer.module.less';

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        site {
          siteMetadata {
            authorName,
            currentYear
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: {
          authorName,
          currentYear
        }
      }
    }) => (
      <footer className={styles.footerBlock}>
        <small>
        © {currentYear} {authorName}
        </small>
      </footer>
    )}
  />
)

export default Footer;