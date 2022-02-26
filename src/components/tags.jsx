import React from 'react'

const Tags = ({ tags }) => (
	<>
		{tags.map( tag => <span>[{tag}]</span>)}
	</>
)

export default Tags;