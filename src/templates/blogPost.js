import { Link } from 'gatsby'
import * as React from 'react'
import Bio from '../components/bio'
import Layout from '../components/layout'
import * as blogStyles from '../styles.module.css'

const NavigationLink = ({ prefix, to, ...props }) => {
	if (to) {
		return (
			<span {...props}>
				<Link to={`/blog/${to.fields.slug}`}>
					{prefix}: {to.frontmatter.title}
				</Link>
			</span>
		)
	}

	return (
		<></>
	)
}

const Navigation = ({ prev, next }) => (
	<nav>
		<NavigationLink prefix="Previous" to={prev} />
		<NavigationLink prefix="Next" to={next} className={blogStyles.next} />
	</nav>
)

const BlogPost = ({ pageContext: { current, prev, next } }) => {
	return (
		<Layout pageTitle={current.frontmatter.title}>
			<div className={blogStyles.article}>
				<span className={blogStyles.meta}>
					<time>{current.frontmatter.date}</time>
					<span>~{current.timeToRead} min to read</span>
				</span>
				<h1>{current.frontmatter.title}</h1>
				<div className={blogStyles.text} dangerouslySetInnerHTML={{ __html: current.html }} />
				<Navigation prev={prev} next={next} />
			</div>
			<Bio />
		</Layout>
	)
}

export default BlogPost