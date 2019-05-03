import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styles from './postslist.module.less'
import Tag from '../Tags/tag';

const PostPreview = ({title, preview, tags, date, link}) => (
  <li className = {styles.previewContainer}>
    <time className = {styles.date}>{date}</time>
    <div className={styles.tags}>
      {tags.map((tag, index) => <Tag key={index} name={tag}/>)}
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
          allTagsMapJson {
            edges {
              node {
                name
                caption
              }
            }
          }
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

    render = {data => {
      const getTagCaption = (tagName) => {
        var mapping = data.allTagsMapJson.edges.map(edge => {
          return {name: edge.node.name, caption: edge.node.caption}
        });
        var found = mapping.filter(map => map.name === tagName);
        return found.length > 0? found[0].caption: tagName;
      }
      
      return (
        <div>
          <ol className = {styles.listWrapper}>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <PostPreview
                key = {node.id}
                title = {node.frontmatter.title}
                date = {node.frontmatter.date}
                preview = {node.frontmatter.preview}
                tags = {node.frontmatter.tags.map(tagName => getTagCaption(tagName))}
                link = {node.fields.slug}
              />
            ))}
          </ol>
        </div>
    )}}
  />
)

export default PostsList;