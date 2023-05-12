import { Link } from "gatsby";
import * as React from "react";
import Bio from "../components/bio";
import Layout from "../components/layout";
import Tags from "../components/tags";
import * as blogStyles from "../styles.module.css";
import SEO from "../components/seo";

const NavigationLink = ({ prefix, to, ...props }) => {
  if (to) {
    return (
      <span {...props}>
        <Link to={`/blog/${to.fields.slug}`}>
          {prefix}: {to.frontmatter.title}
        </Link>
      </span>
    );
  }

  return <></>;
};

const Navigation = ({ prev, next }) => (
  <nav>
    <NavigationLink prefix="Previous" to={prev} />
    <NavigationLink prefix="Next" to={next} className={blogStyles.next} />
  </nav>
);

const BlogPost = ({ pageContext: { current, prev, next } }) => {
  return (
    <Layout pageTitle={current.frontmatter.title}>
      <div className={blogStyles.article}>
        <span className={blogStyles.meta}>
          <time>{current.frontmatter.date}</time>
          <Tags tags={current.frontmatter.tags} />
        </span>
        <h1>{current.frontmatter.title}</h1>
        <div
          className={blogStyles.text}
          dangerouslySetInnerHTML={{ __html: current.html }}
        />
        <Navigation prev={prev} next={next} />
      </div>
      <Bio />
    </Layout>
  );
};

export function Head({location, params, data, pageContext}) {
  return (
    <SEO pageTitle={pageContext.current.frontmatter.title} />
  )
}

export default BlogPost;
