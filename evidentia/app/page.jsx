import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Badge from '../components/Badge'
import EntryCard from '../components/EntryCard'
import { getAllEntries } from '../lib/entries'

export const metadata = {
  title: 'Evidentia Nutrition — Independent Evidence Review',
  description: 'Evidence-rated reviews of nutritional ingredients and interventions. Independent, rigorous, and honest about uncertainty.',
}

const S = {
  hero: { background: '#fff', borderBottom: '1px solid #E2E8E8', padding: '52px 24px 48px' },
  inner: { maxWidth: 820, margin: '0 auto' },
  eyebrow: { fontSize: 11, fontWeight: 600, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#1A6B72', marginBottom: 16 },
  title: { fontFamily: 'Georgia, serif', fontSize: 34, color: '#1A1A2E', lineHeight: 1.25, marginBottom: 18, maxWidth: 660 },
  body: { fontSize: 16, color: '#4A4A6A', lineHeight: 1.7, maxWidth: 580, marginBottom: 30 },
  searchWrap: { display: 'flex', gap: 8, maxWidth: 520 },
  searchInput: { flex: 1, border: '1.5px solid #C5D5D6', borderRadius: 8, padding: '10px 16px', fontSize: 15, color: '#1A1A2E', background: '#F7FAFA', outline: 'none', fontFamily: 'Inter, system-ui, sans-serif' },
  searchBtn: { background: '#1A6B72', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 20px', fontSize: 14, fontWeight: 500, cursor: 'pointer', whiteSpace: 'nowrap' },
}

const differentiators = [
  { icon: '◈', title: 'Form-specific evidence', body: 'We distinguish between forms of the same ingredient. Evidence for one preparation does not automatically transfer to another.' },
  { icon: '◉', title: 'Honest about uncertainty', body: 'We include what the evidence does not show. Null findings and conflicting studies are reported, not omitted.' },
  { icon: '◎', title: 'Fully independent', body: 'No commercial sponsorship, no affiliate relationships. Conflicts of interest and funding sources are publicly disclosed.' },
]

export default async function Home() {
  const allEntries = getAllEntries()
  const featured = allEntries.slice(0, 4)

  return (
    <>
      <Nav />
      <main>

        {/* Hero */}
        <div style={S.hero}>
          <div style={S.inner}>
            <div style={S.eyebrow}>Independent evidence review</div>
            <h1 style={S.title}>
              Nutrition is one of the most contested areas of public health. We exist to make the evidence clearer.
            </h1>
            <p style={S.body}>
              Evidence-rated reviews of nutritional ingredients and interventions. We tell you what the research shows, what it does not show, and which form the evidence actually applies to.
            </p>
            <div style={S.searchWrap}>
              <Link href="/library" style={{ flex: 1, display: 'block' }}>
                <input style={{ ...S.searchInput, width: '100%', cursor: 'pointer' }} placeholder="Search the evidence library, e.g. magnesium, omega-3…" readOnly />
              </Link>
              <Link href="/library">
                <button style={S.searchBtn}>Browse library</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Differentiators */}
        <div style={{ background: '#F7FAFA', borderBottom: '1px solid #E2E8E8', padding: '28px 24px' }}>
          <div style={{ ...S.inner, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {differentiators.map(d => (
              <div key={d.title} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ width: 28, height: 28, background: '#E8F4F5', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#1A6B72', fontSize: 13 }}>{d.icon}</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#1A1A2E', marginBottom: 3 }}>{d.title}</div>
                  <div style={{ fontSize: 12, color: '#4A4A6A', lineHeight: 1.55 }}>{d.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured entries */}
        <div style={{ ...S.inner, padding: '40px 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 20 }}>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 20, color: '#1A1A2E' }}>From the evidence library</h2>
            <Link href="/library" style={{ fontSize: 13, color: '#1A6B72', textDecoration: 'none', fontWeight: 500 }}>
              Browse all {allEntries.length} entries →
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
            {featured.length > 0
              ? featured.map(e => <EntryCard key={e.slug} entry={e} />)
              : [
                  { slug: '#', title: 'Vitamin D', category: 'micronutrient', primaryRating: 'Strong', cardDescription: 'Strong evidence for deficiency correction. Benefits for immunity and cognition are overclaimed in replete individuals.' },
                  { slug: '#', title: 'Magnesium', category: 'micronutrient', primaryRating: 'Moderate', cardDescription: 'Widespread deficiency in Western diets. Evidence is form-specific: bisglycinate, citrate, and malate have distinct profiles.' },
                  { slug: '#', title: 'Curcumin and bioavailability', category: 'botanical', primaryRating: 'Moderate', cardDescription: 'Generic curcumin has poor human evidence. Enhanced-delivery phytosome forms change the picture significantly.' },
                  { slug: '#', title: 'Longevity and cellular health', category: 'longevity', primaryRating: 'Emerging', cardDescription: 'NR, Urolithin A, and Fisetin show early promise. The commercial narrative runs ahead of the evidence.' },
                ].map(e => <EntryCard key={e.slug} entry={e} />)
            }
          </div>
        </div>

        {/* Methodology callout */}
        <div style={{ ...S.inner, padding: '0 24px 48px' }}>
          <div style={{ background: '#fff', border: '1px solid #E2E8E8', borderLeft: '3px solid #1A6B72', borderRadius: '0 10px 10px 0', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#1A1A2E', marginBottom: 4 }}>How we assess evidence</div>
              <div style={{ fontSize: 13, color: '#4A4A6A', lineHeight: 1.55, maxWidth: 460 }}>
                Every claim carries an explicit rating: Strong, Moderate, Emerging, or Insufficient. Our methodology, appraisal tools, and rating decision rules are published in full.
              </div>
            </div>
            <Link href="/methodology" style={{ background: 'none', border: '1px solid #1A6B72', color: '#1A6B72', borderRadius: 7, padding: '8px 16px', fontSize: 13, fontWeight: 500, textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Read the methodology →
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
