import React from 'react';
import styles from './bio.module.less';
import ProfileImage from '../../images/profile.jpg'

const Bio = () => (
  <div className = {styles.container}>
    <img src={ProfileImage} className={styles.photo} alt={'me in the mountains'}/>
    <div className={styles.info}>
      <p>Blog of <b>Alexey Maltsev</b>, full-stack developer from Russia.
      Here published some cool stuff about web and mobile development with .Net.</p>
    </div>
  </div>
)

export default Bio;