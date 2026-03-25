import { notFound } from 'next/navigation'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import Badge from '../../../components/Badge'
import DepthToggle from '../../../components/DepthToggle'
import { getEntry, getAllSlugs } from '../../../lib/entries'

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }) {
  const entry = await getEntry(params.slug)
  if (!entry) return {}
  return { title: `${entry.title}: Evidence Review`, description: `Evidence-rated review of ${entry.title}. ${entry.primaryOutcome}` }
}

const categoryLabels = {
  'micronutrient': 'Micronutrient', 'botanical': 'Botanical', 'adaptogen': 'Adaptogen',
  'macronutrient': 'Macronutrient', 'performance': 'Performance', 'gut-health': 'Gut Health',
  'cognitive-health': 'Cognitive Health', 'longevity': 'Longevity', 'womens-health': "Women's Health",
}

function Section({ title, children, accent }) {
  return (
    <div style={{ background: '#fff', border: '1px solid #E2E8E8', borderLeft: accent ? `3px solid ${accent}` : '1px solid #E2E8E8', borderRadius: accent ? '0 10px 10px 0' : 10, padding: '20px 24px', marginBottom: 12 }}>
      {title && <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 16, color: '#1A1A2E', marginBottom: 10 }}>{title}</h2>}
      {children}
    </div>
  )
}

export default async function EntryPage({ params }) {
  const entry = await getEntry(params.slug)
  if (!entry) notFound()

  const allOutcomes = [
    { outcome: entry.primaryOutcome, rating: entry.primaryRating, numberOfRCTs: entry.numberOfRCTs, totalParticipantN: entry.totalParticipantN, riskOfBiasSummary: entry.riskOfBiasSummary, consistencyFlag: entry.consistencyFlag },
    ...(entry.additionalOutcomes || [])
  ]

  const summaryContent = (
    <div dangerouslySetInnerHTML={{ __html: entry.summaryHtml }}
      style={{ fontSize: 15, color: '#4A4A6A', lineHeight: 1.75 }}
      className="prose"
    />
  )

  const indepthContent = (
    <div>
      {entry.indepthHtml && (
        <div style={{ background: '#fff', border: '1px solid #E2E8E8', borderRadius: 10, padding: '22px 24px', marginBottom: 12 }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 16, color: '#1A1A2E', marginBottom: 12 }}>Full evidence detail</h2>
          <div dangerouslySetInnerHTML={{ __html: entry.indepthHtml }} className="prose" style={{ fontSize: 14, color: '#4A4A6A', lineHeight: 1.75 }} />
        </div>
      )}
    </div>
  )

  return (
    <>
      <Nav />
      <main style={{ maxWidth: 820, margin: '0 auto', padding: '24px 24px 64px' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: 13, color: '#888', marginBottom: 16 }}>
          <a href="/library" style={{ color: '#1A6B72', textDecoration: 'none' }}>Evidence library</a>
          {' / '}
          <span style={{ color: '#888' }}>{categoryLabels[entry.category] || entry.category}</span>
          {' / '}
          <span style={{ color: '#1A1A2E' }}>{entry.title}</span>
        </div>

        {/* Entry header */}
        <div style={{ background: '#fff', border: '1px solid #E2E8E8', borderRadius: 12, padding: '28px', marginBottom: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', color: '#1A6B72', background: '#E8F4F5', padding: '3px 9px', borderRadius: 20 }}>
              {categoryLabels[entry.category] || entry.category}
            </span>
            {entry.bloodTestingRelevant && (
              <span style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.6px', color: '#8B4513', background: '#FFF3E0', padding: '3px 9px', borderRadius: 20 }}>
                Blood testing relevant
              </span>
            )}
            {entry.formSpecificEvidence && (
              <span style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.6px', color: '#1A6B72', background: '#E8F4F5', padding: '3px 9px', borderRadius: 20 }}>
                Form-specific evidence
              </span>
            )}
          </div>

          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 28, color: '#1A1A2E', lineHeight: 1.2, marginBottom: 18 }}>{entry.title}</h1>

          {/* Outcome ratings */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 20 }}>
            {allOutcomes.map((o, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#F7FAFA', border: '1px solid #E2E8E8', borderRadius: 8, padding: '7px 12px' }}>
                <Badge rating={o.rating} size="sm" />
                <span style={{ fontSize: 12, color: '#4A4A6A' }}>{o.outcome}</span>
              </div>
            ))}
          </div>

          {/* Meta */}
          <div style={{ display: 'flex', gap: 20, fontSize: 11, color: '#aaa', borderTop: '1px solid #f0f0f0', paddingTop: 14, flexWrap: 'wrap' }}>
            <span>Last reviewed: {entry.lastReviewed}</span>
            <span>Version {entry.version}</span>
            {entry.reviewInterval && <span>Next review: approx. {entry.reviewInterval} months</span>}
            {entry.advisoryReview && <span style={{ color: '#1A6B72' }}>Advisory reviewed</span>}
            {entry.formStudied && <span>Form studied: {entry.formStudied}</span>}
          </div>
        </div>

        {/* Depth toggle + content */}
        <DepthToggle entry={entry} summaryContent={summaryContent} indepthContent={indepthContent} />

        {/* Related entries */}
        {entry.relatedEntries && entry.relatedEntries.length > 0 && (
          <div style={{ marginTop: 24 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#888', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 12 }}>Related entries</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {entry.relatedEntries.map(slug => (
                <a key={slug} href={`/library/${slug}`} style={{ fontSize: 13, color: '#1A6B72', background: '#E8F4F5', padding: '5px 12px', borderRadius: 20, textDecoration: 'none', border: '1px solid #C5D8DA' }}>
                  {slug.replace(/-/g, ' ')}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Correction link */}
        <div style={{ marginTop: 32, fontSize: 13, color: '#aaa', textAlign: 'center' }}>
          <a href="/contact" style={{ color: '#1A6B72', textDecoration: 'none' }}>Suggest a correction or provide feedback on this entry</a>
        </div>

      </main>
      <Footer />
    </>
  )
}
