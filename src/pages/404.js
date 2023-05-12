import { Link } from "gatsby";
import * as React from "react";
import * as blogStyles from "../styles.module.css";
import SEO from "../components/seo";

const NotFoundPage = () => {
  return (
    <main>
      <div className={blogStyles.notFound}>
        <h1>Page not found</h1>
        <small>or maybe it's hidden somewhere</small>
        <Link to="/">Go back to light</Link>
      </div>
    </main>
  );
};

export function Head() {
	return (
		<SEO pageTitle={"Not found"}/>
	)
}

export default NotFoundPage;
