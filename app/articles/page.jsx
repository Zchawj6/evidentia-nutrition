import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { getAllArticles } from '../../lib/articles'
export const dynamic = 'force-dynamic'
export const metadata = {
  title: 'Articles',
  description: 'Expert commentary, clinical perspectives, and applied discussion from Evidentia Nutrition and guest contributors.',
}

const categoryColors = {
  'Personalisation': { bg: '#E8F4F5', color: '#1A6B72' },
  'Clinical perspective': { bg: '#EEF2FF', color: '#4338CA' },
  "Women's health": { bg: '#FDF2F8', color: '#9D174D' },
  'Gut health': { bg: '#F0FDF4', color: '#166534' },
  'Performance': { bg: '#FFF7ED', color: '#9A3412' },
  'Supplementation': { bg: '#F5F3FF', color: '#6D28D9' },
}

function CategoryTag({ category }) {
  const style = categoryColors[category] || { bg: '#F3F4F6', color: '#374151' }
  return (
    <span style={{ background: style.bg, color: style.color, fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.6px', padding: '3px 9px', borderRadius: 20 }}>
      {category}
    </span>
  )
}

function ArticleCard({ article }) {
  return (
    <Link href={`/articles/${article.slug}`} style={{ textDecoration: 'none' }}>
      <div style={{ background: '#fff', border: '1px solid #E2E8E8', borderRadius: 10, padding: '22px 24px', cursor: 'pointer', height: '100%' }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = '#1A6B72'; e.currentTarget.style.boxShadow = '0 2px 10px rgba(26,107,114,0.08)' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2E8E8'; e.currentTarget.style.boxShadow = 'none' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12, gap: 8 }}>
          <CategoryTag category={article.category} />
          <span style={{ fontSize: 12, color: '#aaa', whiteSpace: 'nowrap' }}>
            {new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
          </span>
        </div>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 17, color: '#1A1A2E', lineHeight: 1.35, marginBottom: 10 }}>
          {article.title}
        </h2>
        <p style={{ fontSize: 13, color: '#4A4A6A', lineHeight: 1.6, marginBottom: 14 }}>
          {article.excerpt}
        </p>
        {article.author && article.author !== 'Evidentia Nutrition' && (
          <div style={{ fontSize: 12, color: '#888', borderTop: '1px solid #f0f0f0', paddingTop: 10 }}>
            <span style={{ fontWeight: 500, color: '#4A4A6A' }}>{article.author}</span>
            {article.authorCredentials && <span style={{ color: '#aaa' }}> · {article.authorCredentials}</span>}
          </div>
        )}
      </div>
    </Link>
  )
}

export default function ArticlesPage() {
  const articles = getAllArticles()

  return (
    <>
      <Nav />
      <main style={{ maxWidth: 900, margin: '0 auto', padding: '40px 24px 64px' }}>

        <div style={{ marginBottom: 36 }}>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 30, color: '#1A1A2E', marginBottom: 12 }}>Articles</h1>
          <p style={{ fontSize: 15, color: '#4A4A6A', lineHeight: 1.7, maxWidth: 600 }}>
            Expert commentary, clinical perspectives, and applied discussion from the Evidentia Nutrition team and guest contributors. Articles are distinct from our evidence library entries: they represent informed opinion and applied interpretation rather than structured evidence appraisal.
          </p>
        </div>

        <div style={{ background: '#F7FAFA', border: '1px solid #E2E8E8', borderLeft: '3px solid #1A6B72', borderRadius: '0 8px 8px 0', padding: '14px 18px', marginBottom: 32, fontSize: 13, color: '#4A4A6A', lineHeight: 1.65 }}>
          Articles on this site represent the views of their named authors and are held to a high editorial standard, but do not follow the same structured appraisal methodology as our <Link href="/library" style={{ color: '#1A6B72', textDecoration: 'none', fontWeight: 500 }}>evidence library entries</Link>. Author credentials are noted on each piece.
        </div>

        {articles.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
            {articles.map(article => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '64px 0', color: '#888' }}>
            <div style={{ fontFamily: 'Georgia, serif', fontSize: 18, marginBottom: 8, color: '#1A1A2E' }}>Articles coming soon</div>
            <div style={{ fontSize: 14 }}>We are preparing our first articles. Check back shortly.</div>
          </div>
        )}

        <div style={{ marginTop: 48, background: '#fff', border: '1px solid #E2E8E8', borderRadius: 10, padding: '24px 28px' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 18, color: '#1A1A2E', marginBottom: 10 }}>Write for Evidentia Nutrition</h2>
          <p style={{ fontSize: 14, color: '#4A4A6A', lineHeight: 1.7, marginBottom: 14 }}>
            We welcome contributions from registered dieticians, clinical academics, pharmacists, and other qualified practitioners. Guest articles are subject to editorial review for accuracy, appropriate use of evidence, and alignment with our editorial standards. Contributors are credited with their name and credentials.
          </p>
          <Link href="/contact" style={{ fontSize: 14, color: '#1A6B72', textDecoration: 'none', fontWeight: 500 }}>
            Get in touch to discuss a contribution →
          </Link>
        </div>

      </main>
      <Footer />
    </>
  )
}
