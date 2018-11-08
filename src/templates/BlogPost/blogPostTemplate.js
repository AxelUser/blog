import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Bio from '../../components/Bio/bio'
import styles from './blogPost.module.less'

const BlogPostTemplate = ({data}) => {
	const {markdownRemark} = data;
	const {html, frontmatter} = markdownRemark;

	return (
		<Layout>
			<h1>{frontmatter.title}</h1>
			<h5>{'Published '+frontmatter.date}</h5>
			<div className={styles.text} dangerouslySetInnerHTML = {{__html: html}} />
			<Bio/>
		</Layout>
	)
}

export default BlogPostTemplate;
export const postQuery = graphql`
	query($path: String!) {
		markdownRemark(fields: { slug: { eq: $path } }) {
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