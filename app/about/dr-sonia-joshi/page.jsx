import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Dr Sonia Joshi',
  description: 'Contributor profile for Dr Sonia Joshi, BDS(Hons) MSc MClinDent(Perio) MRD MFDS RCS, Specialist Periodontal Surgeon, Harley Street, London.',
}

const S = {
  section: { background: '#fff', border: '1px solid #E2E8E8', borderRadius: 10, padding: '28px 32px', marginBottom: 14 },
  h2: { fontFamily: 'Georgia, serif', fontSize: 19, color: '#1A1A2E', marginBottom: 12 },
  body: { fontSize: 15, color: '#4A4A6A', lineHeight: 1.75, marginBottom: 12 },
  label: { fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#1A6B72', marginBottom: 8, display: 'block' },
}

export default function SoniaJoshi() {
  return (
    <>
      <Nav />
      <main style={{ maxWidth: 820, margin: '0 auto', padding: '40px 24px 64px' }}>

        <div style={{ marginBottom: 36 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: '#1A6B72', marginBottom: 12 }}>Contributor</div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 30, color: '#1A1A2E', marginBottom: 8, lineHeight: 1.25 }}>Dr Sonia Joshi</h1>
          <p style={{ fontSize: 15, color: '#4A4A6A', lineHeight: 1.5, marginBottom: 4 }}>BDS(Hons) MSc MClinDent(Perio) MRD MFDS RCS</p>
          <p style={{ fontSize: 15, color: '#4A4A6A', lineHeight: 1.5 }}>Specialist Periodontal Surgeon, Harley Street, London</p>
        </div>

        <div style={S.section}>
          <h2 style={S.h2}>Background</h2>
          <p style={S.body}>Dr Sonia Joshi is a specialist periodontal surgeon practising at Harley Street, London. She holds a Master of Clinical Dentistry in Periodontology and is registered as a specialist in periodontics. Her clinical practice encompasses the full range of periodontal and peri-implant conditions, with a particular interest in the systemic relationships between periodontal disease and broader health outcomes.</p>
          <p style={S.body}>Her research interests focus on the bidirectional relationship between oral health and systemic disease, including the evidence linking periodontal inflammation to cardiovascular, metabolic, and neurodegenerative conditions. This sits at the intersection of periodontology, immunology, and translational medicine, and represents an area where the clinical evidence is growing but frequently misrepresented in both directions.</p>
          <p style={{ fontSize: 15, color: '#4A4A6A', lineHeight: 1.75, marginBottom: 0 }}>Her contribution to Evidentia Nutrition reflects a commitment to evidence-based communication in a field where mechanistic plausibility is often presented as established causation, and where patients routinely receive advice that outpaces what the evidence supports.</p>
        </div>

        <div style={S.section}>
          <h2 style={S.h2}>Contributions</h2>
          <p style={S.body}>Dr Joshi contributes to Evidentia Nutrition as a specialist reviewer and author, with particular focus on the relationship between oral health, systemic inflammation, and nutritional factors. Her contributions bring specialist clinical perspective to areas where periodontal evidence intersects with nutrition research, including inflammatory pathways, dietary patterns, and dementia risk.</p>
          <p style={{ fontSize: 15, color: '#4A4A6A', lineHeight: 1.75, marginBottom: 0 }}>Articles attributed to Dr Joshi have been reviewed against the Evidentia editorial standard and reflect her assessment of the evidence as presented.</p>
        </div>

        <div style={{ ...S.section, marginBottom: 0 }}>
          <h2 style={S.h2}>Conflicts of interest</h2>
          <p style={{ fontSize: 15, color: '#4A4A6A', lineHeight: 1.75, marginBottom: 0 }}>Dr Joshi has no relevant conflicts of interest to declare in relation to her contributions to Evidentia Nutrition. The full conflicts of interest framework is described on the <Link href="/about#conflicts" style={{ color: '#1A6B72', textDecoration: 'none', fontWeight: 500 }}>About page</Link>.</p>
        </div>

      </main>
      <Footer />
    </>
  )
}