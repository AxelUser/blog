import React from 'react'
import Layout from '../components/layout'
import PostsList from '../components/postsList';
import Bio from '../components/Bio/bio'

const IndexPage = ({data}) => (
  <Layout>
    <Bio/>
    <PostsList/>
  </Layout>
)

export default IndexPage
