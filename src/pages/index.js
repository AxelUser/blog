import React from 'react'
import Layout from '../components/layout'
import PostsList from '../components/postsList';

const IndexPage = ({data}) => (
  <Layout>
    <PostsList/>
  </Layout>
)

export default IndexPage
