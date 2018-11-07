import React from 'react'
import Layout from '../components/layout'
import styles from './css/index.module.css'
import { graphql } from 'gatsby'
import PostPreview from '../components/postPreview'

const IndexPage = ({data}) => (
  <Layout>
    <div>
      <h1 className={styles.recentPosts}>
        Recent posts
      </h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <PostPreview
          key = {node.id}
          title = {node.frontmatter.title}
          date = {node.frontmatter.date}
          preview = {node.frontmatter.preview}
          tags = {node.frontmatter.tags}
          link = {node.fields.slug}
        />
      ))}
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query AllPostsList {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {frontmatter: {draft: {ne: true}}}
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            tags
            date(formatString: "DD MMMM, YYYY")
            preview
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
