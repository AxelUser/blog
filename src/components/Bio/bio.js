import React from 'react';
import styles from './bio.module.less';
import ProfileImage from '../../images/profile.jpg'

const Bio = ({itemProp}) => (
  <div itemProp={itemProp} className = {styles.container} itemScope itemType={"http://schema.org/Person"}>
    <img src={ProfileImage} className={styles.photo} alt={'me in the mountains'} itemProp={"image"}/>
    <div className={styles.info}>
      <p>Blog of <b itemProp={"name"}>Alexey Maltsev</b>, full-stack developer from Russia.
      Here published some cool stuff about web and mobile development with .Net.</p>
    </div>
  </div>
)

export default Bio;