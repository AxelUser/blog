import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import * as blogStyles from '../styles.module.css'
import { Helmet } from 'react-helmet'

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

	const title = pageTitle ? `${data.site.siteMetadata.title} | ${pageTitle}` : data.site.siteMetadata.title

	return (
		<>
			<Helmet title={title}/>
			<div className={blogStyles.container}>
				<Header />
				{children}
				<Footer author={data.site.siteMetadata.author} currentYear={data.site.siteMetadata.currentYear} />
			</div>
		</>
	)
}

export default Layout