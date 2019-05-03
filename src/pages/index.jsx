import React from 'react'
import Layout from '../components/Layout/layout'
import PostsList from '../components/PostsList/postsList';
import Bio from '../components/Bio/bio'

const IndexPage = ({data}) => (
  <Layout>
    <Bio/>
    <PostsList/>
  </Layout>
)

export default IndexPage
