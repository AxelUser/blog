import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/react'

const NavItem = ({to, title}) => (
	<li
		css={css`
			display	: inline;
		`}
	>
		<Link to={to}>
			{title}
		</Link>
	</li>
)

const Navigation = ({title}) => (
	<div>
		<header>{title}</header>
		<nav css={css`
			
		`}>
			<ul css={css`
				list-style: none;
			`}>
				<NavItem to="/" title="Home"/>
				<NavItem to="/blog" title="Blog"/>
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
		<div
			css={css`
                margin: 0 auto;
                max-width: 800px;
            `}
		>
			<Navigation title={data.site.siteMetadata.title} />
			<title>{pageTitle}</title>
			<main>
				<h1>{pageTitle}</h1>
				{children}
			</main>
		</div>
	)
}

export default Layout