import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

const entriesDir = path.join(process.cwd(), 'content/entries')

export function getAllEntries() {
  if (!fs.existsSync(entriesDir)) return []
  const files = fs.readdirSync(entriesDir).filter(f => f.endsWith('.md'))
  return files.map(filename => {
    const raw = fs.readFileSync(path.join(entriesDir, filename), 'utf8')
    const { data } = matter(raw)
    return { ...data, slug: data.slug || filename.replace('.md', '') }
  }).sort((a, b) => a.title?.localeCompare(b.title))
}

export async function getEntry(slug) {
  const filePath = path.join(entriesDir, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  const parts = content.split(/\n---\s*IN DEPTH\s*---\n/i)
  const summaryMd = parts[0] || ''
  const indepthMd = parts[1] || ''
  const toHtml = async (md) => {
    const result = await remark().use(remarkHtml, { sanitize: false }).process(md)
    return result.toString()
  }
  const summaryHtml = await toHtml(summaryMd)
  const indepthHtml = await toHtml(indepthMd)
  return { ...data, slug, summaryHtml, indepthHtml }
}

export function getAllSlugs() {
  if (!fs.existsSync(entriesDir)) return []
  return fs.readdirSync(entriesDir).filter(f => f.endsWith('.md')).map(f => f.replace('.md', ''))
}
