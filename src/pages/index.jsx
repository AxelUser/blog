import React from 'react';
import Layout from '../components/Layout/layout';
import PostsList from '../components/PostsList/postsList';
import Bio from '../components/Bio/bio';
import styles from './index.module.less';

const IndexPage = ({data}) => (
  <Layout>
    <div className={styles.mainBlock}>
      <Bio/>
      <PostsList/>
    </div>
  </Layout>
)

export default IndexPage
