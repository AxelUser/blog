import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/Layout/layout'
import Bio from '../../components/Bio/bio'
import styles from './blogPost.module.less'
import {SEO, PublicationSEO} from '../../components/SEO/seo';
import SocialSharing from '../../components/SocialSharing/sharing';

const FooterNavigation = ({prev, next}) => {
	return (
		<div className={styles.postNavigation + " " + styles.postNavigationSinge}>
			{prev != null ? ( 
				<Link className={styles.postLinkPrev} to={prev.fields.slug}>{"← " + prev.frontmatter.title}</Link>
			) : (<div></div>)}
			{next != null ? ( 
				<Link className={styles.postLinkNext} to={next.fields.slug}>{next.frontmatter.title + " →"}</Link>
			) : (<div></div>)}
		</div>
	)
}

const BlogPostTemplate = ({location, pageContext, data: {
	markdownRemark: {
		excerpt,
		html,
		timeToRead,
		frontmatter: {
			date,
			title,
			preview,
			tags
		}
	}
}}) => {
	var {next, prev} = pageContext;
	return (
		<Layout>
			<SEO title = {title} description={excerpt}/>
			<PublicationSEO publicationDate={date} tags={tags}/>
			<article itemScope itemType={'http://schema.org/CreativeWork'}>
				<meta itemProp={"description"} content={preview}/>
				<meta itemProp="keywords" content={tags.join(", ")} />
				<span className={styles.meta}>
					<time itemProp={'datePublished'}>{date}</time>
					<span>~{timeToRead} min to read</span>
					{tags.map((tag, i) => <span key={i}>[{tag}]</span>)}
				</span>
				<h1 className={styles.title} itemProp={'headline'}>{title}</h1>
				<SocialSharing shareUrl={location.href} title={title} description={preview} tags={["dotnet"]}/>
				<div className={styles.text} itemProp={'text'} dangerouslySetInnerHTML = {{__html: html}} />
				<FooterNavigation prev={prev} next={next}/>
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