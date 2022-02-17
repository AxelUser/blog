import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'

const BlogPost = ({ data: { markdownRemark: { frontmatter: {title, date}, html, timeToRead } } }) => {
	return (
		<Layout pageTitle={title}>
			<span>
				<time>{date}</time>
				<span>~{timeToRead} min to read</span>
			</span>
			<div dangerouslySetInnerHTML={{ __html: html }} />
		</Layout>
	)
}

export const query = graphql`
    query ($id: String) {
        markdownRemark(id: {eq: $id}){
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
            }
            html
			timeToRead
        }
    }
`

export default BlogPost