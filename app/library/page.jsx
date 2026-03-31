'use client'
import { useState, useMemo } from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import EntryCard from '../../components/EntryCard'

const CATEGORIES = [
  { slug: 'all', label: 'All topics' },
  { slug: 'micronutrient', label: 'Micronutrients' },
  { slug: 'botanical', label: 'Botanicals' },
  { slug: 'adaptogen', label: 'Adaptogens' },
  { slug: 'macronutrient', label: 'Macronutrients' },
  { slug: 'performance', label: 'Performance' },
  { slug: 'gut-health', label: 'Gut Health' },
  { slug: 'cognitive-health', label: 'Cognitive Health' },
  { slug: 'longevity', label: 'Longevity' },
  { slug: 'womens-health', label: "Women's Health" },
]

const RATINGS = ['All ratings', 'Strong', 'Moderate', 'Emerging', 'Insufficient']

// Placeholder entries until real content is added
const PLACEHOLDER_ENTRIES = [
  { slug: 'vitamin-d', title: 'Vitamin D', category: 'micronutrient', primaryRating: 'Strong', cardDescription: 'Strong evidence for deficiency correction. Benefits for immunity and cognition are overclaimed in the replete population.' },
  { slug: 'magnesium', title: 'Magnesium', category: 'micronutrient', primaryRating: 'Moderate', cardDescription: 'Widespread deficiency in Western diets. Evidence is form-specific across bisglycinate, citrate, malate, and taurate.' },
  { slug: 'vitamin-b12', title: 'Vitamin B12', category: 'micronutrient', primaryRating: 'Strong', cardDescription: 'Critical for vegans, older adults, and those on metformin. Evidence for enhancement in replete individuals is absent.' },
  { slug: 'folate', title: 'Folate and methylation', category: 'micronutrient', primaryRating: 'Strong', cardDescription: 'MTHFR polymorphisms affect folate metabolism. Form choice between folic acid and methylfolate has clinical implications.' },
  { slug: 'omega-3', title: 'Omega-3 fatty acids', category: 'macronutrient', secondaryCategories: ['womens-health', 'cognitive-health'], primaryRating: 'Moderate', cardDescription: 'Evidence is outcome-specific and dose-dependent. Baseline status and dietary intake are central to whether supplementation is warranted.' },  
  { slug: 'creatine', title: 'Creatine', category: 'performance', secondaryCategories: ['womens-health', 'cognitive-health', 'longevity'], primaryRating: 'Strong', cardDescription: 'One of the most robustly evidenced supplements in existence. The evidence base is strong for specific outcomes but the commercial narrative consistently outruns it.' },
  { slug: 'ashwagandha', title: 'Ashwagandha', category: 'adaptogen', secondaryCategories: ['womens-health'], primaryRating: 'Moderate', cardDescription: 'Growing but still moderate evidence base for stress and sleep outcomes. Extract type matters significantly -- KSM-66 and Sensoril are the evidence-based choices.' },  
  { slug: 'vitamin-k2', title: 'Vitamin K2', category: 'micronutrient', secondaryCategories: ['womens-health', 'longevity'], primaryRating: 'Moderate', cardDescription: 'Distinct from vitamin K1 and frequently low in Western diets. Evidence for bone outcomes in postmenopausal women is meaningful. Form and dose specificity matter considerably.' },
  { slug: 'coq10', title: 'CoQ10 (Ubiquinone)', category: 'longevity', secondaryCategories: ['womens-health'], primaryRating: 'Moderate', cardDescription: 'Reasonable evidence in specific populations -- particularly heart failure and statin users. Ubiquinone is the standard studied form. General energy and anti-ageing claims in healthy adults are not well-supported.' },
  { slug: 'citicoline', title: 'Citicoline (CDP-Choline)', category: 'cognitive-health', secondaryCategories: ['womens-health', 'longevity'], primaryRating: 'Moderate', cardDescription: 'Meaningful evidence for cognitive support in older adults and clinical populations. Distinct from other choline forms. Claims for general cognitive enhancement in healthy adults outrun the evidence.' },
  { slug: 'resveratrol', title: 'Resveratrol', category: 'longevity', primaryRating: 'Insufficient', cardDescription: 'One of the most prominent examples of preclinical promise failing to translate into human evidence. The longevity narrative is driven by animal and cell data that has not held up in clinical trials.' },
  { slug: 'curcumin', title: 'Curcumin (Standard Extract)', category: 'botanical', primaryRating: 'Insufficient', cardDescription: 'The gap between turmeric\'s reputation and the evidence for standard curcumin extract is almost entirely a bioavailability problem. The compound shows biological activity in the lab but does not reach meaningful concentrations in the body from conventional supplements.' },
]

export default function Library() {
  const [category, setCategory] = useState('all')
  const [rating, setRating] = useState('All ratings')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return PLACEHOLDER_ENTRIES.filter(e => {
      const catMatch = category === 'all' || e.category === category || (e.secondaryCategories && e.secondaryCategories.includes(category))
      const ratingMatch = rating === 'All ratings' || e.primaryRating === rating
      const searchMatch = !search || e.title.toLowerCase().includes(search.toLowerCase()) || e.cardDescription?.toLowerCase().includes(search.toLowerCase())
      return catMatch && ratingMatch && searchMatch
    })
  }, [category, rating, search])

  const pillStyle = (active) => ({
    padding: '6px 14px', border: '1px solid', borderRadius: 20, fontSize: 13, cursor: 'pointer', fontWeight: active ? 600 : 400,
    borderColor: active ? '#1A6B72' : '#E2E8E8',
    background: active ? '#E8F4F5' : '#fff',
    color: active ? '#1A6B72' : '#4A4A6A',
    transition: 'all 0.12s',
  })

  return (
    <>
      <Nav />
      <main style={{ maxWidth: 900, margin: '0 auto', padding: '40px 24px 64px' }}>

        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 28, color: '#1A1A2E', marginBottom: 10 }}>Evidence library</h1>
          <p style={{ fontSize: 15, color: '#4A4A6A', lineHeight: 1.65, maxWidth: 580 }}>
            {PLACEHOLDER_ENTRIES.length} topics, each reviewed to the same standard. Evidence ratings apply to specific outcomes, not to ingredients in general.
          </p>
        </div>

        {/* Search */}
        <input
          value={search} onChange={e => setSearch(e.target.value)}
          placeholder="Search topics, e.g. magnesium, omega-3, probiotics…"
          style={{ width: '100%', border: '1.5px solid #C5D5D6', borderRadius: 8, padding: '10px 16px', fontSize: 15, marginBottom: 20, outline: 'none', background: '#fff', fontFamily: 'Inter, system-ui, sans-serif' }}
        />

        {/* Category filter */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
          {CATEGORIES.map(c => (
            <button key={c.slug} style={pillStyle(category === c.slug)} onClick={() => setCategory(c.slug)}>{c.label}</button>
          ))}
        </div>

        {/* Rating filter */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
          {RATINGS.map(r => (
            <button key={r} style={pillStyle(rating === r)} onClick={() => setRating(r)}>{r}</button>
          ))}
        </div>

        {/* Results count */}
        <div style={{ fontSize: 13, color: '#888', marginBottom: 16 }}>
          Showing {filtered.length} {filtered.length === 1 ? 'entry' : 'entries'}
          {category !== 'all' && ` in ${CATEGORIES.find(c => c.slug === category)?.label}`}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
          {filtered.map(e => <EntryCard key={e.slug} entry={e} />)}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '48px 0', color: '#888', fontSize: 15 }}>
            No entries match your search. <button onClick={() => { setSearch(''); setCategory('all'); setRating('All ratings') }} style={{ color: '#1A6B72', background: 'none', border: 'none', cursor: 'pointer', fontSize: 15 }}>Clear filters</button>
          </div>
        )}

      </main>
      <Footer />
    </>
  )
}
