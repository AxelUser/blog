import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/react'

const Header = () => (
	<div css={css`
		width: 800px;
		display: flex;
	`}>
		<div css={css`
			padding: 1.45rem 1.1rem;
		`}>
			<nav css={css`
				display	: inline;
			`}>
				<ul css={css`
					list-style: none;
					display	: inline;
					padding-inline-start: 0px;
				`}>
					<NavItem to="/" title="Blog" />
				</ul>
			</nav>
		</div>
	</div>
)

const NavItem = ({ to, title }) => (
	<li
		css={css`
			display	: inline;
			margin-right: 1rem;
		`}
	>
		<Link to={to}>
			{title}
		</Link>
	</li>
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
			<div css={css`
				display: flex;
				align-items: center;
				flex-direction: column;
            `}>
				<Header title={data.site.siteMetadata.title} />
				<div css={css`
					width: 800px;
				`}>
					{children}
				</div>
			</div>
		</>
	)
}

export default Layout