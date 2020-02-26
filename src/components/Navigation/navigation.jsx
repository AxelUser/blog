import React from 'react';
import {Link} from 'gatsby';
import navStyles from './navigation.module.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowCircleLeft, faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';

const FooterNavigation = ({prev, next}) => {
	return (
		<div className={navStyles.postNavigation + " " + navStyles.postNavigationSinge}>
			{prev && (
				<Link className={[navStyles.postLink, navStyles.prev].join(' ')} to={prev.fields.slug}>
						<FontAwesomeIcon icon={faArrowCircleLeft} className={navStyles.navArror}/>
						<span className={navStyles.navTitle}>{prev.frontmatter.title}</span>
				</Link>
			)}
			{next && (
				<Link className={[navStyles.postLink, navStyles.next].join(' ')} to={next.fields.slug}>
						<span className={navStyles.navTitle}>{next.frontmatter.title}</span>
						<FontAwesomeIcon icon={faArrowCircleRight} className={navStyles.navArror}/>
				</Link>
			)}
		</div>
	)
}

export default FooterNavigation;