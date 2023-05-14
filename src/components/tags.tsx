import React from "react"

const Tags: React.FC<{ tags: string[] }> = ({ tags }) => {
  return (
    <>
      {tags.map(tag => (
        <span>[{tag}]</span>
      ))}
    </>
  )
}

export default Tags
