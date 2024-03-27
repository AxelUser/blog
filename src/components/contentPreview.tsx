import { Link } from "gatsby"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import React from "react"
import {
  container,
  contentCoverImageContainer,
  meta,
  previewDescription,
  previewTitle,
} from "./contentPreview.css"
import Tags from "./tags"

interface PreviewProps {
  title: string
  description: string
  tags?: string[]
  date?: string
  link: string
  coverImage?: IGatsbyImageData
}

const ContentPreview: React.FC<PreviewProps> = ({
  title,
  description,
  tags,
  date,
  link,
  coverImage,
}) => {
  const metaPreview =
    date != null && tags != null ? (
      <div className={meta}>
        <time>{date}</time>
        <Tags tags={tags} />
      </div>
    ) : null

  const cover =
    coverImage != null ? (
      <div className={contentCoverImageContainer}>
        <GatsbyImage alt="" image={coverImage} />
      </div>
    ) : null

  return (
    <Link to={link}>
      <div className={container}>
        {cover}
        {metaPreview}
        <h1 className={previewTitle}>{title}</h1>
        <p className={previewDescription}>{description}</p>
      </div>
    </Link>
  )
}

export default ContentPreview
