import React from 'react'
import { Link } from 'gatsby';
import { css } from '@emotion/react';

const link = css`
    
`

const Tag = ({ name, count }) => {
	if (count) {
		return <Link to={'/'} className={link}>{`${name}:\u00A0${count}`}</Link>
	} else {
		return <Link to={'/'} className={link}>{`${name}`}</Link>
	}
}

export default Tag;