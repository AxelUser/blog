import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import * as blogStyles from '../styles.module.css'

const Header = () => (
	<header className={blogStyles.content}>
		<nav>
			<Link to='/'>Blog</Link>
		</nav>
	</header>
)

const Footer = ({author, currentYear}) => (
	<footer>
		<small>© {currentYear} {author}</small>
	</footer>
)

const Layout = ({ pageTitle, children }) => {
	const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
					author
					currentYear
                }
            }
        }
    `)

	return (
		<>
			<head>
				<title>{pageTitle | data.site.siteMetadata.title}</title>
			</head>
			<div className={blogStyles.container}>
				<Header title={data.site.siteMetadata.title} />
				<div className={blogStyles.content}>
					{children}
				</div>
				<Footer author={data.site.siteMetadata.author} currentYear={data.site.siteMetadata.currentYear} />
			</div>
		</>
	)
}

export default Layout