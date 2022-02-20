import { css } from '@emotion/react'
import { Link } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'

const NavigationLink = ({ to, ...props }) => {
	if (to) {
		return (
			<span {...props}>
				<Link to={`/blog/${to.fields.slug}`}>
					{to.frontmatter.title}
				</Link>
			</span>
		)
	}

	return (
		<></>
	)
}

const Navigation = ({ prev, next }) => (
	<div>
		<NavigationLink to={prev} css={css`
			float: left;
		`} />
		<NavigationLink to={next} css={css`
			float: right;
		`} />
	</div>
)

const BlogPost = ({ pageContext: { current, prev, next } }) => {
	return (
		<Layout pageTitle={current.frontmatter.title}>
			<div css={css`
				padding: 1.1rem 0 0 1.1rem;
			`}>
				<span>
					<time>{current.frontmatter.date}</time>
					<span>~{current.timeToRead} min to read</span>
				</span>
				<div dangerouslySetInnerHTML={{ __html: current.html }} />
				<Navigation prev={prev} next={next} />
			</div>
		</Layout>
	)
}

export default BlogPost