import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/react'

const NavItem = ({ to, title }) => (
	<li
		css={css`
			display	: inline;
			margin-left: 1rem;
		`}
	>
		<Link to={to}>
			{title}
		</Link>
	</li>
)

const Navigation = ({ title }) => (
	<div>
		<header
			css={css`
				display	: inline;
			`}
		>
			{title}
		</header>
		<nav css={css`
			display	: inline;
		`}>
			<ul css={css`
				list-style: none;
				display	: inline;
				padding-inline-start: 0px;
			`}>
				<NavItem to="/" title="Home" />
				<NavItem to="/blog" title="Blog" />
			</ul>
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
			<main css={css`
                margin: 0 auto;
                max-width: 800px;
            `}>
				<Navigation title={data.site.siteMetadata.title} />
				<h1>{pageTitle}</h1>
				{children}
			</main>
		</>
	)
}

export default Layout