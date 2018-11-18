import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/Layout/layout'
import Bio from '../../components/Bio/bio'
import styles from './blogPost.module.less'
import navStyles from './navigation.module.less'
import {SEO, PublicationSEO} from '../../components/SEO/seo';
import SocialSharing from '../../components/SocialSharing/sharing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowCircleLeft, faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';

const FooterNavigation = ({prev, next}) => {
	return (
		<div className={navStyles.postNavigation + " " + navStyles.postNavigationSinge}>
			{prev != null ? (
				<Link className={[navStyles.postLink, navStyles.prev].join(' ')} to={prev.fields.slug}>
						<FontAwesomeIcon icon={faArrowCircleLeft} className={navStyles.navArror}/>
						<span className={navStyles.navTitle}>{prev.frontmatter.title}</span>
				</Link>
			) : (<div></div>)}
			{next != null ? (
				<Link className={[navStyles.postLink, navStyles.next].join(' ')} to={next.fields.slug}>
						<span className={navStyles.navTitle}>{next.frontmatter.title}</span>
						<FontAwesomeIcon icon={faArrowCircleRight} className={navStyles.navArror}/>
				</Link>
			) : (<div></div>)}
		</div>
	)
}

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
			tags
		}
	}
}}) => {
	const getTagCaption = (tagName) => {
		var mapping = allTagsMapJson.edges.map(edge => {
			return {name: edge.node.name, caption: edge.node.caption}
		});
		var found = mapping.filter(map => map.name == tagName);
		return found.length > 0? found[0].caption: tagName;
	}

	var {next, prev} = pageContext;
	var tagCaptions = tags.map(tagName => getTagCaption(tagName));
	return (
		<Layout>
			<SEO title = {title} description={excerpt}/>
			<PublicationSEO publicationDate={date} tags={tagCaptions}/>
			<article itemScope itemType={'http://schema.org/CreativeWork'}>
				<meta itemProp={"description"} content={preview}/>
				<meta itemProp="keywords" content={tagCaptions.join(", ")} />
				<span className={styles.meta}>
					<time itemProp={'datePublished'}>{date}</time>
					<span>~{timeToRead} min to read</span>
					{tagCaptions.map((tag, i) => <span key={i}>[{tag}]</span>)}
				</span>
				<h1 className={styles.title} itemProp={'headline'}>{title}</h1>
				<div className={styles.text} itemProp={'text'} dangerouslySetInnerHTML = {{__html: html}} />
				<div className={styles.share}>
					<SocialSharing shareUrl={location.href} title={title} description={preview} tags={tags}/>
				</div>
				<FooterNavigation prev={prev} next={next}/>
				<Bio itemProp={"author"}/>
			</article>
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
			}
			fields {
				slug
			}
		}
	}
`