import React from 'react'
import * as blogStyles from '../styles.module.css'

const Tags = ({ tags }) => (
	<>
		{tags.map( tag => <span className={blogStyles.tag}>[{tag}]</span>)}
	</>
)

export default Tags;