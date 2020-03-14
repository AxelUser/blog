import React from 'react';
import styles from './bio.module.less';
import ProfileImage from '../../images/profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub, faTwitter, faStackOverflow} from '@fortawesome/free-brands-svg-icons';

const SocialLink = ({url, icon}) => (
  <a href={url} className={styles.socialIcon}>
    <FontAwesomeIcon icon={icon}/>
  </a>
)

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
      <SocialLink url={"https://linkedin.com/in/dev-alexey-maltsev"} icon={faLinkedin}/>
      <SocialLink url={"https://github.com/AxelUser"} icon={faGithub}/>
      <SocialLink url={"https://twitter.com/axel_user"} icon={faTwitter}/>
      <SocialLink url={"https://stackoverflow.com/users/4205978/axeluser"} icon={faStackOverflow}/>
    </div>
  </div>
)

export default Bio;