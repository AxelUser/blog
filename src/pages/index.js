import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Tag from '../components/tag';
import { css } from '@emotion/react';

const PostPreview = ({ title, preview, tags, date, link }) => (
	<li css={css`
		border-bottom: 1px dotted #303030;
		min-height: 11.1rem;
		padding: 1.1rem 1.1rem 0.28rem;

		&:hover {
			background-color: #f5f5f5;
		}
	`}>
		<time>{date}</time>
		<div>
			{tags.map((tag, index) => <Tag key={index} name={tag} />)}
		</div>
		<Link
			to={link}
			css={css`
				text-decoration: none;
				color: #424242;
			`}
		>
			<h1 css={css`
				padding-top: 0.56rem;
    			padding-bottom: 0.56rem;
			`}>
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
				padding: 0;
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