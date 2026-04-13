import { notFound } from 'next/navigation'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import { getArticle, getAllArticleSlugs } from '../../../lib/articles'

const categoryColors = {
  'Personalisation': { bg: '#E8F4F5', color: '#1A6B72' },
  'Clinical perspective': { bg: '#EEF2FF', color: '#4338CA' },
  "Women's health": { bg: '#FDF2F8', color: '#9D174D' },
  'Gut health': { bg: '#F0FDF4', color: '#166534' },
  'Performance': { bg: '#FFF7ED', color: '#9A3412' },
  'Supplementation': { bg: '#F5F3FF', color: '#6D28D9' },
  'Evidence Review': { bg: '#EEF2FF', color: '#4338CA' },
}

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs()
  return slugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }) {
  const article = await getArticle(params.slug)
  if (!article) return {}
  return { title: article.title, description: article.excerpt }
}

export default async function ArticlePage({ params }) {
  const article = await getArticle(params.slug)
  if (!article) notFound()

  const catStyle = categoryColors[article.category] || { bg: '#F3F4F6', color: '#374151' }
  const isGuest = article.author && article.author !== 'Evidentia Nutrition'
  const hasSeries = article.series && article.series.trim() !== ''
  const initials = isGuest ? article.author.split(' ').slice(-2).map(n => n[0]).join('') : 'EN'
  return (
    <>
      <Nav />
      <main style={{ maxWidth: 820, margin: '0 auto', padding: '24px 24px 64px' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: 13, color: '#888', marginBottom: 20 }}>
          <Link href="/articles" style={{ color: '#1A6B72', textDecoration: 'none' }}>Articles</Link>
          {' / '}
          <span style={{ color: '#1A1A2E' }}>{article.title}</span>
        </div>

        {/* Article header */}
        
         <div style={{ marginBottom: 32 }}>
          {hasSeries && (
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#1A6B72', marginBottom: 10 }}>
              {article.series}
            </div>
          )}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <span style={{ background: catStyle.bg, color: catStyle.color, fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
              {article.category}
            </span>
            <span style={{ fontSize: 12, color: '#aaa' }}>
              {new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </div>

          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 30, color: '#1A1A2E', lineHeight: 1.25, marginBottom: 16 }}>
            {article.title}
          </h1>

          {/* Author */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#1A6B72', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 600, color: '#fff' }}>
              {initials}
            </div>
            <div>
              <span style={{ fontSize: 13, fontWeight: 500, color: '#1A1A2E' }}>
                {isGuest ? article.author : 'Evidentia Nutrition'}
              </span>
              {article.authorCredentials && (
                <span style={{ fontSize: 12, color: '#888' }}> · {article.authorCredentials}</span>
              )}
            </div>
          </div>
        </div>

        {/* Article body */}
        <div
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
          className="prose"
          style={{ fontSize: 15, color: '#4A4A6A', lineHeight: 1.75 }}
        />

        {/* Footer note */}
        <div style={{ marginTop: 48, borderTop: '1px solid #E2E8E8', paddingTop: 24, fontSize: 13, color: '#888' }}>
          <Link href="/articles" style={{ color: '#1A6B72', textDecoration: 'none' }}>← Back to articles</Link>
        </div>

      </main>
      <Footer />
    </>
  )
}
