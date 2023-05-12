import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import * as blogStyles from "../styles.module.css";
import Bio from "../components/bio";
import Tags from "../components/tags";
import SEO from "../components/seo";

const PostPreview = ({ title, preview, tags, date, link }) => (
  <div className={blogStyles.preview}>
    <div className={blogStyles.previewMeta}>
      <time>{date}</time>
      <Tags tags={tags} />
    </div>
    <Link to={link}>
      <h1>{title}</h1>
      <p>{preview}</p>
    </Link>
  </div>
);

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout>
      <Bio />
      <div>
        {edges.map(({ node }) => (
          <PostPreview
            title={node.frontmatter.title}
            preview={node.frontmatter.preview}
            date={node.frontmatter.date}
            tags={node.frontmatter.tags}
            link={`/blog/${node.fields.slug}`}
          />
        ))}
      </div>
    </Layout>
  );
};

export function Head() {
	return (
		<SEO pageTitle={"Blog"}/>
	)
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            tags
            date(formatString: "DD MMM, YYYY")
            preview
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default BlogPage;
