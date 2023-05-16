export type BlogPostInfo = {
  title: string
  date: string
  tags: string[]
  link: string
}

export type BlogPostContext = {
  current: BlogPostInfo
  prev: BlogPostInfo | undefined
  next: BlogPostInfo | undefined
}
