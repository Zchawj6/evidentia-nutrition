'use client'
import { useState, useMemo } from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import EntryCard from '../../components/EntryCard'
import Link from 'next/link'

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
  { slug: 'musculoskeletal', label: 'Musculoskeletal' },
]

const RATINGS = ['All ratings', 'Strong', 'Moderate', 'Emerging', 'Insufficient']

// Placeholder entries until real content is added
const PLACEHOLDER_ENTRIES = [
  { slug: '5-htp', title: '5-HTP', category: 'mental-health', secondaryCategories: ['sleep', 'weight-management'], primaryRating: 'Emerging', cardDescription: 'A serotonin precursor with a plausible mechanism and a genuinely limited evidence base. The safety considerations around drug interactions are more firmly established than the clinical benefits.' },
  { slug: 'ashwagandha', title: 'Ashwagandha', category: 'adaptogen', secondaryCategories: ['womens-health', 'cognitive-health'], primaryRating: 'Moderate', cardDescription: 'Ashwagandha has the most consistent evidence base of the mainstream adaptogens, with reasonable trial quality for stress and anxiety outcomes. Evidence for other claimed benefits is thinner.' },
  { slug: 'berberine', title: 'Berberine', category: 'hormonal-metabolic', secondaryCategories: ['womens-health'], primaryRating: 'Moderate', cardDescription: "Berberine has a meaningful evidence base for glycaemic control in type 2 diabetes and insulin resistance, but the popular 'natural metformin' framing substantially overstates the evidence. Trial quality is limited, most data come from a single geographic context, long-term safety is not established, and evidence in healthy adults without metabolic indication is absent." },
  { slug: 'beta-alanine', title: 'Beta-Alanine', category: 'musculoskeletal', secondaryCategories: ['sports-performance'], primaryRating: 'Moderate', cardDescription: 'A non-essential amino acid that raises muscle carnosine and improves high-intensity exercise performance in efforts lasting one to four minutes. Evidence is specific to exercise context and dose; general wellness claims are not supported.' },
  { slug: 'bifidobacterium-lactis-bb12', title: 'Bifidobacterium lactis BB-12', category: 'gut-health', primaryRating: 'Moderate', cardDescription: 'BB-12 is one of the best-studied probiotic strains, with consistent evidence for improving stool frequency and bowel regularity, particularly in older adults and those with low baseline bowel frequency. Effects on immune function and respiratory infections are modest and inconsistent.' },
  { slug: 'citicoline', title: 'Citicoline', category: 'cognitive-health', primaryRating: 'Moderate', cardDescription: 'Citicoline has a plausible mechanism and some positive trial data for cognitive outcomes, particularly in older adults with mild impairment. Evidence in healthy younger adults is less compelling.' },
  { slug: 'collagen-hydrolysed', title: 'Collagen (Hydrolysed)', category: 'musculoskeletal', secondaryCategories: ['womens-health', 'performance'], primaryRating: 'Moderate', cardDescription: 'Hydrolysed collagen peptides have reasonable evidence for reducing pain and improving function in knee osteoarthritis, distinguishing them from glucosamine and chondroitin where large trials have been negative. Evidence for skin benefits is substantially weaker than marketing suggests — when trials are stratified by funding source, independently-funded studies show no significant effect. Evidence for tendon support in athletes is emerging but currently very low certainty. Dose, timing, and source all matter and are not interchangeable across products.' },
  { slug: 'coq10', title: 'CoQ10 (Ubiquinone)', category: 'longevity', primaryRating: 'Moderate', cardDescription: 'CoQ10 has reasonable evidence for specific clinical populations, particularly individuals on statins and those with heart failure. Evidence for broad anti-ageing or energy benefits in healthy adults is not well supported.' },
  { slug: 'creatine', title: 'Creatine', category: 'performance', secondaryCategories: ['womens-health', 'cognitive-health', 'longevity'], primaryRating: 'Strong', cardDescription: 'Creatine has one of the strongest evidence bases in sports nutrition for strength and power output. Emerging evidence for cognitive and healthy ageing applications is plausible but less established.' },
  { slug: 'curcumin', title: 'Curcumin (Standard Extract)', category: 'botanical', primaryRating: 'Insufficient', cardDescription: 'The gap between turmeric\'s reputation and the evidence for standard curcumin extract is almost entirely a bioavailability problem. The compound shows biological activity in the lab but does not reach meaningful concentrations in the body from conventional supplements.' },
  { slug: 'curcumin-phytosome', title: 'Curcumin (Enhanced Bioavailability Forms)', category: 'botanical', secondaryCategories: ['longevity', 'womens-health'], primaryRating: 'Moderate', cardDescription: 'Enhanced bioavailability curcumin formulations produce meaningfully different pharmacokinetics than standard extract. The evidence base is more promising but still limited by trial size and duration.' },
  { slug: 'folate', title: 'Folate and methylfolate', category: 'micronutrient', primaryRating: 'Strong', cardDescription: 'MTHFR status, pregnancy planning, and the distinction between folic acid and methylfolate all matter here. Strong evidence for neural tube defect prevention; more complex picture for other outcomes.' },
  { slug: 'iodine', title: 'Iodine', category: 'thyroid-health', secondaryCategories: ['female-health', 'micronutrients'], primaryRating: 'Strong', cardDescription: 'Iodine is essential for thyroid hormone synthesis and foetal brain development. Deficiency is well-documented in plant-based diets and in pregnancy. The evidence is strong for severe deficiency populations but weaker than often assumed for mild-to-moderate deficiency. Excess intake carries real thyroid risk.' },
  { slug: 'iron', title: 'Iron', category: 'micronutrient', primaryRating: 'Strong', cardDescription: 'Iron has strong evidence for correcting iron deficiency and iron-deficiency anaemia, but this effect is strictly dependent on baseline status. Supplementation in iron-replete individuals is not evidence-based and may cause harm.' },
  { slug: 'inositol', title: 'Inositol', category: 'womens-health', secondaryCategories: ['metabolic-health', 'fertility', 'pregnancy'], primaryRating: 'Moderate', cardDescription: 'Evidence is strongest for preventing gestational diabetes in high-risk women. PCOS metabolic benefits are real but more limited than commercial messaging implies. Fertility claims extend well beyond what placebo-controlled trials support. Form distinction between myo-inositol and D-chiro-inositol is clinically important.' },
  { slug: 'l-theanine', title: 'L-theanine', category: 'cognitive-health', primaryRating: 'Moderate', cardDescription: 'L-theanine has moderate evidence for modest reduction in acute stress and anxiety in healthy adults, and the caffeine-plus-theanine combination shows consistent benefits for attention and focus. Standalone cognitive enhancement claims are not well supported by the evidence.' },
  { slug: 'lactobacillus-acidophilus', title: 'Lactobacillus acidophilus', category: 'gut-health', primaryRating: 'Insufficient', cardDescription: 'Lactobacillus acidophilus is widely used in probiotic products, but evidence is strain-specific and often comes from multi-strain formulations. No single indication is consistently supported across strains, and broad gut health claims are not well supported.' },
  { slug: 'lactobacillus-rhamnosus-gg', title: 'Lactobacillus rhamnosus GG', category: 'gut-health', primaryRating: 'Strong', cardDescription: 'Lactobacillus rhamnosus GG is the most broadly evidenced individual probiotic strain, with Strong evidence for antibiotic-associated diarrhoea prevention and acute diarrhoea in children. Evidence for other applications is meaningful but more modest. Strain designation matters -- products labelled Lactobacillus rhamnosus without the GG designation are not equivalent.' },
  { slug: 'lactobacillus-reuteri', title: 'Lactobacillus reuteri', category: 'gut-health', primaryRating: 'Moderate', cardDescription: 'Lactobacillus reuteri has meaningful evidence for infant colic, but only in a specific strain and population: DSM 17938 in breastfed infants. Evidence for oral health is promising as an adjunct, while broader gut and immune claims are not well supported.' },
  { slug: 'lions-mane', title: "Lion's Mane", category: 'cognitive-health', primaryRating: 'Emerging', cardDescription: "Lion's Mane has a plausible neurotrophic mechanism from preclinical work but human trial evidence is limited to small, short-duration studies in mild cognitive impairment. Claims around neurogenesis, dementia prevention, and cognitive enhancement in healthy adults are not supported by the current human evidence base." },
  { slug: 'magnesium', title: 'Magnesium', category: 'micronutrient', primaryRating: 'Moderate', cardDescription: 'Widespread deficiency in Western populations makes magnesium one of the more defensible supplements. Evidence is strongest for individuals with low status; benefits in replete adults are less clearly established.' },
  { slug: 'nac', title: 'NAC (N-Acetylcysteine)', category: 'detoxification', secondaryCategories: ['respiratory', 'womens-health'], primaryRating: 'Moderate', cardDescription: 'A cysteine derivative and glutathione precursor with strong evidence as a paracetamol antidote and moderate evidence in COPD. Evidence in healthy supplementers remains limited.' },
  { slug: 'nmn', title: 'Nicotinamide Mononucleotide (NMN)', category: 'longevity', secondaryCategories: ['hormonal-metabolic', 'performance'], primaryRating: 'Emerging', cardDescription: 'NMN is a precursor to NAD+, a coenzyme that declines with age and plays central roles in energy metabolism and DNA repair. Oral supplementation generally raises blood NAD+ levels in middle-aged and older adults, but this is a biomarker effect. No human trial has yet demonstrated that NMN extends healthy lifespan, prevents disease, or produces clinically meaningful improvements in metabolic or physical outcomes with adequate evidence quality. The IV NAD+ infusion market has outpaced the science considerably.' },
  { slug: 'omega-3', title: 'Omega-3 fatty acids', category: 'macronutrient', secondaryCategories: ['womens-health', 'cognitive-health'], primaryRating: 'Moderate', cardDescription: 'Omega-3s have strong evidence for triglyceride reduction and specific cardiovascular populations, but the picture for general prevention is more complicated than popular belief suggests.' },
  { slug: 'phosphatidylserine', title: 'Phosphatidylserine', category: 'cognitive-health', secondaryCategories: ['performance', 'healthy-ageing'], primaryRating: 'Moderate', cardDescription: 'Evidence supports modest memory benefits in older adults with cognitive decline, primarily from trials using bovine-derived PS no longer on the market. Soy-derived versions show weaker effects. Cortisol and athletic performance claims rest on very small studies.' },
  { slug: 'probiotics', title: 'Probiotics', category: 'gut-health', primaryRating: 'Moderate', cardDescription: 'Probiotics have genuine evidence for specific indications -- particularly antibiotic-associated diarrhoea prevention and certain IBS applications -- but the evidence is strain-specific and indication-specific. A general probiotic product cannot be assumed to produce the effects demonstrated for a specific studied strain.' },
  { slug: 'resveratrol', title: 'Resveratrol', category: 'longevity', primaryRating: 'Insufficient', cardDescription: 'One of the clearest examples of a compound with compelling preclinical data that has not translated to human outcomes. Bioavailability and metabolic instability remain fundamental barriers.' },
  { slug: 'saccharomyces-boulardii', title: 'Saccharomyces boulardii', category: 'gut-health', primaryRating: 'Strong', cardDescription: 'Saccharomyces boulardii CNCM I-745 has strong evidence for preventing antibiotic-associated diarrhoea and remains active during antibiotic treatment. Evidence for acute diarrhoea and H. pylori adjunct use is meaningful but weaker, and broader gut health claims are often overstated.' },  { slug: 'vitamin-b12', title: 'Vitamin B12', category: 'micronutrient', primaryRating: 'Strong', cardDescription: 'Critical for neurological function and red blood cell formation. Deficiency risk is high in vegans, older adults, and those on metformin. Form and route of administration matter more than is commonly appreciated.' },
  { slug: 'selenium', title: 'Selenium', category: 'micronutrient', secondaryCategories: ['thyroid-health', 'womens-health', 'mens-health'], primaryRating: 'Moderate', cardDescription: 'An essential trace element with well-established roles in thyroid hormone metabolism and antioxidant defence. Evidence supports supplementation in Hashimoto\'s thyroiditis; evidence in healthy, replete populations is limited.' },
  { slug: 'taurine', title: 'Taurine', category: 'cardiovascular', secondaryCategories: ['cognitive-health', 'metabolic-health'], primaryRating: 'Emerging', cardDescription: 'An amino acid with a credible cardiovascular signal and a consumer profile dominated by energy drinks. The evidence is more substantive than the association implies, and more limited than the marketing suggests.' },
  { slug: 'vitamin-c', title: 'Vitamin C', category: 'micronutrient', primaryRating: 'Strong', cardDescription: 'Vitamin C has a well-established role in correcting low status, collagen synthesis, and iron absorption. The evidence for cold prevention in ordinary healthy adults is more modest than popular belief suggests. Large prevention trials in replete adults are consistently null for cardiovascular and cancer outcomes.' },
  { slug: 'vitamin-d', title: 'Vitamin D', category: 'micronutrient', primaryRating: 'Strong', cardDescription: 'Strong evidence for deficiency correction and bone health. Prevention claims for cancer, cardiovascular disease, and cognitive decline in replete populations are not well supported by trial evidence.' },
  { slug: 'vitamin-k2', title: 'Vitamin K2', category: 'micronutrient', secondaryCategories: ['womens-health', 'longevity'], primaryRating: 'Moderate', cardDescription: 'Vitamin K2 has a plausible and interesting mechanism for directing calcium to bone rather than soft tissue. The human outcome evidence is growing but not yet definitive.' },
  { slug: 'zinc', title: 'Zinc', category: 'micronutrient', primaryRating: 'Strong', cardDescription: 'Zinc has important biochemical roles in immune processes, wound healing, reproductive health, and skin integrity -- but these do not translate into infection prevention or general immune enhancement in replete adults. The evidence for benefit is clearest in individuals with low or deficient zinc status. Immune boosting and testosterone claims in healthy adults are not well-supported by the trial evidence.' },
]
const PLACEHOLDER_ARTICLES = [
  { slug: 'how-to-choose-a-probiotic', title: 'How to choose a probiotic', type: 'article', cardDescription: 'Not all probiotics are the same. Strain, dose, and evidence base all vary widely. This guide explains what to look for.' },
  { slug: 'magnesium-for-sleep', title: 'Magnesium for sleep: what the evidence actually shows', type: 'article', cardDescription: 'Magnesium is widely recommended for sleep. The evidence is more limited than most coverage suggests.' },
  { slug: 'nad-infusions-evidence', title: 'NAD+ infusions: what the evidence actually shows', type: 'article', cardDescription: 'NAD+ infusions are being sold in wellness clinics worldwide. The human evidence is limited to small pilot studies.' },
  { slug: 'probiotics-after-antibiotics', title: 'Probiotics after antibiotics: what the evidence actually shows', type: 'article', cardDescription: 'Antibiotics disrupt the gut microbiome. Probiotics are widely recommended to help. The evidence is more nuanced than most guidance suggests.' },
  { slug: 'supplements-and-medications-interactions', title: 'Supplements and medications: the interactions that matter', type: 'article', cardDescription: 'Many supplements interact with prescription and over-the-counter medications in ways that are clinically meaningful.' },
  { slug: 'supplements-excess-harm', title: 'The problem with excess: why more is not better with supplements', type: 'article', cardDescription: 'Most nutrients have an optimal range. Going beyond it provides no additional benefit and in some cases causes measurable harm.' },
  { slug: 'vitamin-d-seasonal-dosing', title: 'Seasonal vitamin D: why your winter dose is not your summer dose', type: 'article', cardDescription: 'A fixed winter supplement dose assumes everyone starts from the same place and responds the same way. The evidence suggests neither is true.' },
  { slug: 'which-form-of-magnesium', title: 'Which form of magnesium is best? What the evidence actually shows', type: 'article', cardDescription: 'Magnesium supplements come in dozens of forms. The marketing around each is extensive. The clinical evidence is thinner than most consumers realise.' },
  { slug: 'why-one-dose-fits-nobody', title: 'Why one dose fits nobody: the case for personalised supplementation', type: 'article', cardDescription: 'Population-level recommended intakes are designed to cover the majority at a single dose. They do not account for individual variation.' },
]
export default function Library() {
  const [category, setCategory] = useState('all')
  const [rating, setRating] = useState('All ratings')
  const [search, setSearch] = useState('')

 const filtered = useMemo(() => {
  const matchedEntries = PLACEHOLDER_ENTRIES.filter(e => {
    const catMatch = category === 'all' || e.category === category || (e.secondaryCategories && e.secondaryCategories.includes(category))
    const ratingMatch = rating === 'All ratings' || e.primaryRating === rating
    const searchMatch = !search || e.title.toLowerCase().includes(search.toLowerCase()) || e.cardDescription?.toLowerCase().includes(search.toLowerCase())
    return catMatch && ratingMatch && searchMatch
  })

  const matchedArticles = !search ? [] : PLACEHOLDER_ARTICLES.filter(a =>
    a.title.toLowerCase().includes(search.toLowerCase()) ||
    a.cardDescription?.toLowerCase().includes(search.toLowerCase())
  )

  return [...matchedEntries, ...matchedArticles]
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14 }}>
        {filtered.map(e =>
  e.type === 'article'
    ? <Link key={e.slug} href={`/articles/${e.slug}`} style={{ textDecoration: 'none' }}>
        <div style={{ background: '#fff', border: '1px solid #E2E8E8', borderRadius: 10, padding: '20px 22px', cursor: 'pointer', height: '100%' }}>
          <div style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#1A6B72', marginBottom: 8 }}>Article</div>
          <div style={{ fontFamily: 'Georgia, serif', fontSize: 16, color: '#1A1A2E', marginBottom: 8, lineHeight: 1.35 }}>{e.title}</div>
          <div style={{ fontSize: 13, color: '#4A4A6A', lineHeight: 1.6 }}>{e.cardDescription}</div>
        </div>
      </Link>
    : <EntryCard key={e.slug} entry={e} />
)}
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
