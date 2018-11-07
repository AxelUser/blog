import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styles from './css/tags.module.css'

const Tags = (tags) => (
	<StaticQuery
		query={
			graphql`
				query AllTagsList {
					allMarkdownRemark(
						sort: { fields: [frontmatter___date], order: DESC }
						filter: {frontmatter: {draft: {ne: true}}}
						) {
						tags:group(field: frontmatter___tags){
							name:fieldValue,
							count:totalCount
						}
					}
				}
			`}
		render={data => (
			<div>
				{data.allMarkdownRemark.tags.map((tag) =>
					<a className={styles.tagsItem}>{`${tag.name}:\u00A0${tag.count}`}</a>
				)}
			</div>
		)}
	/>
)

export default Tags;