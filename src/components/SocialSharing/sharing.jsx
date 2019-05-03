import React from 'react'
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from 'react-share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { StaticQuery, graphql } from 'gatsby';

import styles from './sharing.module.less';

const ButtonContent = ({text, icon}) => (
  <>
    <FontAwesomeIcon icon={icon} className={styles.icon}/>
    <span className={styles.name}>{text}</span>
  </>
)

const SocialSharing = ({shareUrl, title, description, tags}) => (
  <StaticQuery
    query={graphql`
      query SharingQuery {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }`
    }
    render={() => (
      <div className={styles.sharingBlock}>
        {/* <div className={styles.shareTitle}>SHARE:</div> */}
        <TwitterShareButton 
          className={[styles.sharingButton, styles.twitter].join(' ')}
          url={shareUrl}
          title={title}
          hashtags={tags}
        >
          <ButtonContent text={"Twitter"} icon={faTwitter}/>
        </TwitterShareButton>
        
        <FacebookShareButton 
          className={[styles.sharingButton, styles.facebook].join(' ')}
          url={shareUrl}
          quote={title}
          hashtag={"#"+tags[0]}
        >
          <ButtonContent text={"Facebook"} icon={faFacebookF}/>
        </FacebookShareButton>
        
        <LinkedinShareButton
          className={[styles.sharingButton, styles.linkedin].join(' ')}
          url={shareUrl}
          title={title}
          description={description}
        >
          <ButtonContent text={"Linkedin"} icon={faLinkedinIn}/>
        </LinkedinShareButton>
      </div>
    )}
  />

)

export default SocialSharing;