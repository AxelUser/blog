import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

const SEO = ({ pageTitle }) => {
  const {site: {siteMetadata: {title: siteTitle}}} = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);


  const title = pageTitle
    ? `${siteTitle} | ${pageTitle}`
    : siteTitle;

  return (
    <>
      <title>{title}</title>
      <meta
        name="google-site-verification"
        content="8Dy4lxRZAH8BAi86GsiP9mlM_ELJLCh839CXT3W32SI"
      />
    </>
  );
};

export default SEO;
