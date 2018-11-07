import React from 'react'
import { Link } from 'gatsby'

const PostPreview = ({title, preview, tags, date, link}) => (
	<div>
		<Link
			to={link}
		>
			<h4>
				{title}{tags.map((tag) => ` [${tag}] `)}
				<span>
				— {date}
				</span>
			</h4>
				<p>{preview}</p>
		</Link>
	</div>
)

export default PostPreview;