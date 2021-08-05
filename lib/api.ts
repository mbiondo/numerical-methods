import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export interface Post {
  slug: string
  content: string
  title: string
}

const postsDirectory = join(process.cwd(), 'content/methods')

export const getPostSlugs = (): Array<string> => {
  return fs.readdirSync(postsDirectory)
}

export const getPostBySlug = (slug: string): Post => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const post: Post = {
    slug: realSlug,
    title: data.title,
    content: content
  }

  return post
}

export const getAllPosts = (): Array<Post> => {
  const slugs = getPostSlugs()
  const posts = slugs.map(slug => getPostBySlug(slug))
  return posts
}
