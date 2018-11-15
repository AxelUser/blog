import React from 'react';
import styles from './bio.module.less';
import ProfileImage from '../../images/profile.jpg'
import TwitterIcon from '../../images/social/twitter.svg'
import GitHubIcon from '../../images/social/github.svg'
import LinkedInIcon from '../../images/social/linkedin.svg'

const Bio = ({itemProp}) => (
  <div className={styles.container}>
    <div className={styles.profile} itemProp={itemProp} itemScope itemType={"http://schema.org/Person"}>
      <img src={ProfileImage} className={styles.photo} alt={'me in the mountains'} itemProp={"image"}/>
      <div className={styles.info}>
        <p>Blog of <b itemProp={"name"}>Alexey Maltsev</b>, full-stack developer from Russia.
        Most of the time he works with .Net-projects for web and mobile.</p>
      </div>
    </div>
    <div className={styles.socialBlock}>
      <a href="https://linkedin.com/in/dev-alexey-maltsev">
        <LinkedInIcon className={styles.socialIcon}/>
      </a>
      <a href="https://github.com/AxelUser">
        <GitHubIcon className={styles.socialIcon}/>
      </a>
      <a href="https://twitter.com/axel_user">
        <TwitterIcon className={styles.socialIcon}/>
      </a>
    </div>
  </div>
)

export default Bio;