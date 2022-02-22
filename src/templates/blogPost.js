import { Link } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
import * as blogStyles from '../styles.module.css'

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
		<NavigationLink to={prev} className={blogStyles.prev} />
		<NavigationLink to={next} className={blogStyles.next} />
	</div>
)

const BlogPost = ({ pageContext: { current, prev, next } }) => {
	return (
		<Layout pageTitle={current.frontmatter.title}>
			<div className={blogStyles.article}>
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