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
			<article itemScope itemType={'http://schema.org/CreativeWork'}>
				<meta itemProp={"description"} content={frontmatter.preview}/>
				<time className={styles.meta} itemProp={'datePublished'}>{frontmatter.date}</time>
				<h1 className={styles.title} itemProp={'headline'}>{frontmatter.title}</h1>
				<div className={styles.text} itemProp={'text'} dangerouslySetInnerHTML = {{__html: html}} />
				<Bio itemProp={"author"}/>
			</article>
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
				date(formatString: "DD MMMM, YYYY"),
				title,
				preview
			}
			fields {
				slug
			}
		}
	}
`