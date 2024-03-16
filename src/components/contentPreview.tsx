import { Link } from "gatsby"
import React from "react"
import { container, meta } from "./contentPreview.css"
import Tags from "./tags"

interface PreviewProps {
  title: string
  description: string
  tags?: string[]
  date?: string
  link: string
}

const ContentPreview: React.FC<PreviewProps> = ({
  title,
  description,
  tags,
  date,
  link,
}) => {
  const metaPreview =
    date != null && tags != null ? (
      <div className={meta}>
        <time>{date}</time>
        <Tags tags={tags} />
      </div>
    ) : null

  return (
    <div className={container}>
      {metaPreview}
      <Link to={link}>
        <h1>{title}</h1>
        <p>{description}</p>
      </Link>
    </div>
  )
}

export default ContentPreview
