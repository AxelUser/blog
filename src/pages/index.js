import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Tag from '../components/tag';
import * as blogStyles from '../styles.module.css'

const PostPreview = ({ title, preview, tags, date, link }) => (
	<div className={blogStyles.preview}>
		<time>{date}</time>
		<div>
			{tags.map((tag, index) => <Tag key={index} name={tag} />)}
		</div>
		<Link to={link}>
			<h1>{title}</h1>
			<h4>{preview}</h4  >
		</Link>
	</div>
)

const BlogPage = ({data: { allMarkdownRemark: { edges } }}) => {
	return (
		<Layout pageTitle="Blog">
			<div>
				{edges.map(({ node }) => (
					<PostPreview
						title={node.frontmatter.title}
						preview={node.frontmatter.preview}
						date={node.frontmatter.date}
						tags={[]}
						link={`/blog/${node.fields.slug}`}
					/>
				))}
			</div>
		</Layout>
	)
}

export const query = graphql`
	query {
		allMarkdownRemark(
			sort: { fields: [frontmatter___date], order: DESC }
			filter: {frontmatter: {draft: {ne: true}}}
		) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						tags
						date(formatString: "DD MMMM, YYYY")
						preview
					}
					fields {
						slug
					}
				}
			}
		}
	}`

export default BlogPage