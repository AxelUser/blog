import { Link } from "gatsby"
import React from "react"
import { container, meta } from "./blog-post.preview.css"
import Tags from "./tags"

interface PreviewProps {
  title: string
  description: string
  tags: string[]
  date: string
  link: string
}

const BlogPostPreview: React.FC<PreviewProps> = ({
  title,
  description,
  tags,
  date,
  link,
}) => {
  return (
    <div className={container}>
      <div className={meta}>
        <time>{date}</time>
        <Tags tags={tags} />
      </div>
      <Link to={link}>
        <h1>{title}</h1>
        <p>{description}</p>
      </Link>
    </div>
  )
}

export default BlogPostPreview
