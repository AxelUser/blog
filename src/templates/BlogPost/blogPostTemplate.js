import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout/layout'
import Bio from '../../components/Bio/bio'
import styles from './blogPost.module.less'
import SEO from '../../components/SEO/seo';

const BlogPostTemplate = ({data: {
	markdownRemark: {
		excerpt,
		html,
		frontmatter: {
			date,
			title,
			preview,
			tags
		}
	}
}}) => {
	return (
		<Layout>
			<SEO title = {title} description={excerpt}/>
			<article itemScope itemType={'http://schema.org/CreativeWork'}>
				<meta itemProp={"description"} content={preview}/>
				<meta itemProp="keywords" content={tags.join(", ")} />
				<span className={styles.meta}>
					<time itemProp={'datePublished'}>{date}</time>
					{tags.map((tag) => <span className={styles.tag}>[{tag}]</span>)}
				</span>
				<h1 className={styles.title} itemProp={'headline'}>{title}</h1>
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
			timeToRead
			frontmatter {
				date(formatString: "DD MMMM, YYYY")
				title
				preview
				tags
			}
			fields {
				slug
			}
		}
	}
`