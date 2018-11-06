import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import styles from './css/index.module.css'
import { graphql } from 'gatsby'
import Tags from '../components/tags';

const IndexPage = ({data}) => (
  <Layout>
    <div>
      <h1 className={styles.recentPosts}>
        Recent posts
      </h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
          >
            <h4>
              {node.frontmatter.title}{node.frontmatter.tags.map((tag) => ` [${tag}] `)}
              <span>
                — {node.frontmatter.date}
              </span>
            </h4>
            <p>{node.frontmatter.preview}</p>
          </Link>
        </div>
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
