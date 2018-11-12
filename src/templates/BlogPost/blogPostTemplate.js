import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout/layout'
import Bio from '../../components/Bio/bio'
import styles from './blogPost.module.less'
import SEO from '../../components/SEO/seo';

const BlogPostTemplate = ({data}) => {
	const {markdownRemark} = data;
	const {excerpt, html, frontmatter} = markdownRemark;

	return (
		<Layout>
			<SEO title = {frontmatter.title} description={excerpt}/>
			<p className={styles.meta}>{frontmatter.date}</p>
			<h1 className={styles.title}>{frontmatter.title}</h1>
			<div className={styles.text} dangerouslySetInnerHTML = {{__html: html}} />
			<Bio/>
		</Layout>
	)
}

export default BlogPostTemplate;
export const postQuery = graphql`
	query($path: String!) {
		markdownRemark(fields: { slug: { eq: $path } }) {
			excerpt
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY"),
				title
			}
			fields {
				slug
			}
		}
	}
`