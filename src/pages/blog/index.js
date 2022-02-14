import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import Tag from '../../components/tag';
import { css } from '@emotion/react';

const PostPreview = ({ title, preview, tags, date, link }) => (
	<li>
		<time>{date}</time>
		<div>
			{tags.map((tag, index) => <Tag key={index} name={tag} />)}
		</div>
		<Link to={link}>
			<h1>
				{title}
			</h1>
			<h4>{preview}</h4  >
		</Link>
	</li>
)

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

const BlogPage = ({data: { allMarkdownRemark: { edges } }}) => {
	return (
		<Layout pageTitle="Blog">
			<ol css={css`
				list-style: none;
			`}>
				{edges.map(({ node }) => (
					<PostPreview
						title={node.frontmatter.title}
						preview={node.frontmatter.preview}
						date={node.frontmatter.date}
						tags={[]}
						link={`/blog/${node.fields.slug}`}
					/>
				))}
			</ol>
		</Layout>
	)
}

export default BlogPage