import React from "react"

type TagsProps = {
  readonly tags: string[]
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <>
      {tags.map(tag => (
        <span>[{tag}]</span>
      ))}
    </>
  )
}

export default Tags
