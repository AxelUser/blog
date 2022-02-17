import { Link } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'

const BlogPost = ({pageContext: {current, prev, next}}) => {
	return (
		<Layout pageTitle={current.frontmatter.title}>
			<span>
				<time>{current.frontmatter.date}</time>
				<span>~{current.timeToRead} min to read</span>
			</span>
			<div dangerouslySetInnerHTML={{ __html: current.html }} />
			<Link to={`/blog/${next.fields.slug}`}>Next</Link>
		</Layout>
	)
}

export default BlogPost