import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import * as blogStyles from '../styles.module.css'

const Header = () => (
	<div className={`${blogStyles.header} ${blogStyles.content}`}>
		<nav>
			<Link className={blogStyles.item} to='/'>Blog</Link>
		</nav>
	</div>
)

const Layout = ({ pageTitle, children }) => {
	const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
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
			</div>
		</>
	)
}

export default Layout