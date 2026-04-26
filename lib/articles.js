import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

const articlesDir = path.join(process.cwd(), 'content/articles')

export function getAllArticles() {
  if (!fs.existsSync(articlesDir)) return []
  const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.md'))
  return files.map(filename => {
    const raw = fs.readFileSync(path.join(articlesDir, filename), 'utf8')
    const { data } = matter(raw)
    return { ...data, slug: data.slug || filename.replace('.md', '') }
  }).sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return new Date(b.date) - new Date(a.date)
  })
}

export async function getArticle(slug) {
  const filePath = path.join(articlesDir, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  const result = await remark().use(remarkHtml, { sanitize: false }).process(content)
  return { ...data, slug, contentHtml: result.toString() }
}

export function getAllArticleSlugs() {
  if (!fs.existsSync(articlesDir)) return []
  return fs.readdirSync(articlesDir).filter(f => f.endsWith('.md')).map(f => f.replace('.md', ''))
}
