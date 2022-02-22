import React from 'react'
import { Link } from 'gatsby';

const Tag = ({ name, count }) => {
	if (count) {
		return <Link to={'/'}>{`${name}:\u00A0${count}`}</Link>
	} else {
		return <Link to={'/'}>{`${name}`}</Link>
	}
}

export default Tag;