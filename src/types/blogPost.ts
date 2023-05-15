export type BlogPostNode = {
  internal: {
    contentFilePath: string
  }
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
    preview: string
    date: string
    tags: string[]
    legacy: boolean
  }
}

export type BlogPostContext = {
  current: BlogPostNode
  prev: BlogPostNode | undefined
  next: BlogPostNode | undefined
}
