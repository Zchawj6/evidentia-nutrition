'use client'
import Link from 'next/link'
import Badge from './Badge'

const categoryLabels = {
  'micronutrient': 'Micronutrient',
  'botanical': 'Botanical',
  'adaptogen': 'Adaptogen',
  'macronutrient': 'Macronutrient',
  'performance': 'Performance',
  'gut-health': 'Gut Health',
  'cognitive-health': 'Cognitive Health',
  'longevity': 'Longevity',
  'womens-health': "Women's Health",
}

export default function EntryCard({ entry }) {
  const { slug, title, category, primaryRating, primaryOutcome, cardDescription } = entry
  return (
    <Link href={`/library/${slug}`} style={{ textDecoration: 'none' }}>
      <div style={{
        background: '#fff', border: '1px solid #E2E8E8', borderRadius: 10,
        padding: '18px 20px', cursor: 'pointer',
        transition: 'border-color 0.15s, box-shadow 0.15s',
      }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = '#1A6B72'; e.currentTarget.style.boxShadow = '0 2px 10px rgba(26,107,114,0.09)' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2E8E8'; e.currentTarget.style.boxShadow = 'none' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
          <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', color: '#888' }}>
            {categoryLabels[category] || category}
          </span>
          <Badge rating={primaryRating} size="sm" />
        </div>
        <div style={{ fontFamily: 'Georgia, serif', fontSize: 16, color: '#1A1A2E', marginBottom: 7, lineHeight: 1.3 }}>
          {title}
        </div>
        <div style={{ fontSize: 13, color: '#4A4A6A', lineHeight: 1.55 }}>
          {cardDescription || primaryOutcome}
        </div>
      </div>
    </Link>
  )
}
