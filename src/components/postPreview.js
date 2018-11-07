import React from 'react'

const PostPreview = ({title, preview, date, link}) => (
	<div>
		<Link
			to={node.fields.slug}
		>
			<h4>
				{node.frontmatter.title}{node.frontmatter.tags.map((tag) => ` [${tag}] `)}
				<span>
				— {node.frontmatter.date}
				</span>
			</h4>
				<p>{node.frontmatter.preview}</p>
		</Link>
	</div>
)

export default PostPreview;