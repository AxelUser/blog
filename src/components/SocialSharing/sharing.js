import React from 'react'
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from 'react-share';
import { StaticQuery, graphql } from 'gatsby';

import styles from './sharing.module.less';

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
          Twitter
        </TwitterShareButton>
        
        <FacebookShareButton 
          className={[styles.sharingButton, styles.facebook].join(' ')}
          url={shareUrl}
          quote={title}
          hashtag={"#"+tags[0]}
        >
          Facebook
        </FacebookShareButton>
        
        <LinkedinShareButton
          className={[styles.sharingButton, styles.linkedin].join(' ')}
          url={shareUrl}
          title={title}
          description={description}
        >
          Linkedin
        </LinkedinShareButton>
      </div>
    )}
  />

)

export default SocialSharing;