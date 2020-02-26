import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout/layout'
import Bio from '../../components/Bio/bio'
import styles from './blogPost.module.less'
import {SEO, PublicationSEO} from '../../components/SEO/seo';
import SocialSharing from '../../components/SocialSharing/sharing';
import FooterNavigation from '../../components/Navigation/navigation';

const BlogPostTemplate = ({location, pageContext, data: {
	allTagsMapJson,
	markdownRemark: {
		excerpt,
		html,
		timeToRead,
		frontmatter: {
			date,
			title,
			preview,
			tags,
			keywords
		}
	}
}}) => {
	var {next, prev} = pageContext;
	return (
		<Layout>
			<SEO title = {title} description={excerpt}/>
			<PublicationSEO publicationDate={date} tags={keywords}/>
			<article className={styles.post} itemScope itemType={'http://schema.org/CreativeWork'}>
				<meta itemProp={"description"} content={preview}/>
				<meta itemProp="keywords" content={keywords.join(", ")} />
				<span className={styles.meta}>
					<time itemProp={'datePublished'}>{date}</time>
					<span>~{timeToRead} min to read</span>
					{keywords.map((tag, i) => <span key={i}>[{tag}]</span>)}
				</span>
				<h1 className={styles.title} itemProp={'headline'}>{title}</h1>
				<div className={styles.text} itemProp={'text'} dangerouslySetInnerHTML = {{__html: html}} />
				<div className={styles.share}>
					<SocialSharing shareUrl={location.href} title={title} description={preview} tags={tags}/>
				</div>
				<FooterNavigation prev={prev} next={next}/>				
			</article>
			<Bio itemProp={"author"}/>
		</Layout>
	)
}

export default BlogPostTemplate;
export const postQuery = graphql`
	query($path: String!) {
		allTagsMapJson {
			edges {
				node {
					name
					caption
				}
			}
		}
		markdownRemark(fields: { slug: { eq: $path } }) {
			excerpt
			html
			timeToRead
			frontmatter {
				date(formatString: "DD MMMM, YYYY")
				title
				preview
				tags
				keywords
			}
			fields {
				slug
			}
		}
	}
`