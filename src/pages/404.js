import { Link } from "gatsby"
import * as React from "react"
import { Helmet } from "react-helmet"
import * as blogStyles from '../styles.module.css'

const NotFoundPage = () => {
	return (
		<main>
			<Helmet title="Not found" />
			<div className={blogStyles.notFound}>
				<h1>Page not found</h1>
				<small>or maybe it's hidden somewhere</small>
				<Link to="/">Go back to light</Link>
			</div>
		</main>
  	)
}

export default NotFoundPage
