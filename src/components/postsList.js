import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styles from './css/postslist.module.less'
import Tag from './tag';

const PostPreview = ({title, preview, tags, date, link}) => (
  <li className = {styles.previewContainer}>
    <time className = {styles.date}>{date}</time>
    <div class={styles.tags}>
      {tags.map((tag) => <Tag name={tag}/>)}
    </div>
    <Link
      to={link}
      className={styles.previewLink}
    >      
      <h1 className = {styles.title}>
        {title}
      </h1>
      <h4 className = {styles.preview}>{preview}</h4  >
    </Link>
  </li>
)

const PostsList = () => (
  <StaticQuery
    query = {
      graphql`
        query {
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
    `}

    render = {data => (
      <div>
        <h1>
          Development posts
        </h1>
        {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
        <ol className = {styles.listWrapper}>
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
        </ol>
      </div>
    )}
  />
)

export default PostsList;