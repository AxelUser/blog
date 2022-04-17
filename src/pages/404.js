import { Link } from "gatsby"
import * as React from "react"
import { Helmet } from "react-helmet"
import * as blogStyles from '../styles.module.css'

const NotFoundPage = () => {
	return (
		<main>
			<Helmet>
				<title>Not found</title>
				<meta name="google-site-verification" content="8Dy4lxRZAH8BAi86GsiP9mlM_ELJLCh839CXT3W32SI" />
			</Helmet>
			<div className={blogStyles.notFound}>
				<h1>Page not found</h1>
				<small>or maybe it's hidden somewhere</small>
				<Link to="/">Go back to light</Link>
			</div>
		</main>
  	)
}

export default NotFoundPage
