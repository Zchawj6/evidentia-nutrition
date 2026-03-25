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
  { slug: 'omega-3', title: 'Omega-3 fatty acids', category: 'macronutrient', primaryRating: 'Mixed', cardDescription: 'Complex evidence picture across cardiovascular, cognitive, and inflammatory outcomes. Individual baseline status matters.' },
  { slug: 'iron', title: 'Iron', category: 'micronutrient', primaryRating: 'Strong', cardDescription: 'Supplementation without confirmed deficiency carries real risk. Blood testing is essential before use.' },
  { slug: 'vitamin-b12', title: 'Vitamin B12', category: 'micronutrient', primaryRating: 'Strong', cardDescription: 'Critical for vegans, older adults, and those on metformin. Evidence for enhancement in replete individuals is absent.' },
  { slug: 'folate', title: 'Folate and methylation', category: 'micronutrient', primaryRating: 'Strong', cardDescription: 'MTHFR polymorphisms affect folate metabolism. Form choice between folic acid and methylfolate has clinical implications.' },
  { slug: 'protein', title: 'Protein and muscle protein synthesis', category: 'macronutrient', primaryRating: 'Strong', cardDescription: 'Strong evidence base routinely overclaimed. Individual variation by age, training status, and protein source is well-evidenced.' },
  { slug: 'creatine', title: 'Creatine', category: 'performance', primaryRating: 'Strong', cardDescription: 'One of the most robustly evidenced supplements in existence, still surrounded by myth. Monohydrate is the evidence standard.' },
  { slug: 'ashwagandha', title: 'Ashwagandha', category: 'adaptogen', primaryRating: 'Moderate', cardDescription: 'Growing but still moderate evidence base for stress and cortisol outcomes. KSM-66 is the most studied extract form.' },
  { slug: 'probiotics', title: 'Gut microbiome and probiotics', category: 'gut-health', primaryRating: 'Emerging', cardDescription: 'Strain-specificity is central. Evidence for specific strains differs substantially from evidence for generic blends.' },
  { slug: 'zinc', title: 'Zinc', category: 'micronutrient', primaryRating: 'Moderate', cardDescription: 'Moderate evidence in specific contexts. Interactions with copper at higher doses need clear safety communication.' },
  { slug: 'curcumin', title: 'Curcumin and bioavailability', category: 'botanical', primaryRating: 'Moderate', cardDescription: 'Generic curcumin has weak human evidence. Phytosome preparations meaningfully change the evidence picture.' },
  { slug: 'coq10', title: 'CoQ10', category: 'longevity', primaryRating: 'Moderate', cardDescription: 'Reasonable evidence in specific populations, particularly those on statins. Ubiquinone is the standard studied form.' },
  { slug: 'iodine', title: 'Iodine', category: 'micronutrient', primaryRating: 'Strong', cardDescription: 'An underappreciated public health concern in the UK, particularly for those avoiding dairy and not eating fish.' },
  { slug: 'caffeine', title: 'Caffeine and cognitive performance', category: 'performance', primaryRating: 'Strong', cardDescription: 'Unusually strong evidence base with well-characterised individual variation in metabolism via CYP1A2 polymorphisms.' },
  { slug: 'cognitive-nutrition', title: 'Cognitive nutrition and nootropics', category: 'cognitive-health', primaryRating: 'Moderate', cardDescription: 'Anchor entry for the cognitive nutrition category covering citicoline, lion\'s mane, bacopa, and phosphatidylserine.' },
  { slug: 'longevity', title: 'Longevity and cellular health', category: 'longevity', primaryRating: 'Emerging', cardDescription: 'NR, Urolithin A, and Fisetin show early promise. The evidence is genuinely emerging and the commercial narrative runs ahead of it.' },
  { slug: 'womens-hormonal-health', title: 'Hormonal balance in women', category: 'womens-health', primaryRating: 'Moderate', cardDescription: 'Covers Vitex, DIM, and Red Clover across relevant life stages. Individual hormonal status makes this a strong personalisation case.' },
]

export default function Library() {
  const [category, setCategory] = useState('all')
  const [rating, setRating] = useState('All ratings')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return PLACEHOLDER_ENTRIES.filter(e => {
      const catMatch = category === 'all' || e.category === category
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
