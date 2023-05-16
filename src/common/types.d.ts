export type BlogPostInfo = {
  title: string
  date: string
  tags: string[]
  link: string
}

export type BlogPostContext = {
  id: string
  previousId?: string
  nextId?: string
}
