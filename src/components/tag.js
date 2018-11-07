
import React from 'react'
import styles from './css/tags.module.less'
import { Link } from 'gatsby';

const Tag = ({name, count}) => {
  if(count){
    return <Link to={'/category/'} className={styles.tag}>{`${name}:\u00A0${count}`}</Link>
  } else {
    return <Link to={'/category/'} className={styles.tag}>{`${name}`}</Link>
  }
}

export default Tag;