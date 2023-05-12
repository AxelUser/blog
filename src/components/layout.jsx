import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import * as blogStyles from "../styles.module.css";

const Header = () => (
  <header>
    <nav>
      <Link to="/">Blog</Link>
    </nav>
  </header>
);

const Footer = ({ author, currentYear }) => (
  <footer>
    <small>
      © {currentYear} {author}
    </small>
  </footer>
);

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          currentYear
        }
      }
    }
  `);

  return (
    <>
      <div className={blogStyles.container}>
        <Header />
        {children}
        <Footer
          author={data.site.siteMetadata.author}
          currentYear={data.site.siteMetadata.currentYear}
        />
      </div>
    </>
  );
};

export default Layout;
