import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Professor Jatin Joshi',
  description: 'Contributor profile for Professor Jatin Joshi, MBBS MSc(Oxon) MFDS FRCS(Plast), Hon. Professor of Surgery (Translational Research), University College London.',
}

const S = {
  section: { background: '#fff', border: '1px solid #E2E8E8', borderRadius: 10, padding: '28px 32px', marginBottom: 14 },
  h2: { fontFamily: 'Georgia, serif', fontSize: 19, color: '#1A1A2E', marginBottom: 12 },
  body: { fontSize: 15, color: '#4A4A6A', lineHeight: 1.75, marginBottom: 12 },
  label: { fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#1A6B72', marginBottom: 8, display: 'block' },
}

export default function JatinJoshi() {
  return (
    <>
      <Nav />
      <main style={{ maxWidth: 820, margin: '0 auto', padding: '40px 24px 64px' }}>

        <div style={{ marginBottom: 36 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: '#1A6B72', marginBottom: 12 }}>Contributor</div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 30, color: '#1A1A2E', marginBottom: 8, lineHeight: 1.25 }}>Professor Jatin Joshi</h1>
          <p style={{ fontSize: 15, color: '#4A4A6A', lineHeight: 1.5, marginBottom: 4 }}>MBBS MSc(Oxon) MFDS FRCS(Plast)</p>
          <p style={{ fontSize: 15, color: '#4A4A6A', lineHeight: 1.5 }}>Hon. Professor of Surgery (Translational Research), University College London</p>
        </div>

        <div style={S.section}>
          <h2 style={S.h2}>Background</h2>
          <p style={S.body}>Professor Jatin Joshi is a surgeon and translational researcher with clinical and academic training across medicine and reconstructive surgery. He holds a postgraduate degree from the University of Oxford and is an Honorary Professor of Surgery at University College London, where his work sits at the intersection of research evidence and clinical application.</p>
          <p style={S.body}>He has published extensively in peer-reviewed literature and has presented at international conferences spanning surgical, medical, nutritional, and evidence-based healthcare settings. He has served as a peer reviewer for the BMJ, the British Journal of Hospital Medicine, the Journal of Plastic, Reconstructive and Aesthetic Surgery, and Advances in Nutrition.</p>
          <p style={{ fontSize: 15, color: '#4A4A6A', lineHeight: 1.75, marginBottom: 0 }}>His contribution to Evidentia Nutrition reflects a longstanding clinical interest in the gap between what patients are taking and what the evidence actually supports. Translational research is concerned with what evidence means for real people in practice, and that is the standard this platform applies to every entry and article it publishes.</p>
        </div>

        <div style={S.section}>
          <h2 style={S.h2}>Contributions</h2>
          <p style={S.body}>Professor Joshi contributes to Evidentia Nutrition as a reviewer and author, with particular focus on clinical safety, drug interactions, and the critical appraisal of evidence in conditions where supplementation is commonly used but poorly scrutinised.</p>
          <p style={{ fontSize: 15, color: '#4A4A6A', lineHeight: 1.75, marginBottom: 0 }}>Articles attributed to Professor Joshi have been reviewed against the Evidentia editorial standard and reflect his assessment of the evidence as presented.</p>
        </div>

        <div style={{ ...S.section, marginBottom: 0 }}>
          <h2 style={S.h2}>Conflicts of interest</h2>
          <p style={{ fontSize: 15, color: '#4A4A6A', lineHeight: 1.75, marginBottom: 0 }}>Professor Joshi holds a clinical leadership role at Personally (Supplement Technology Limited), a direct-to-consumer personalised supplement service. This interest is declared in full. Editorial content on Evidentia Nutrition is produced independently and is not subject to commercial direction. The full conflicts of interest framework is described on the <Link href="/about#conflicts" style={{ color: '#1A6B72', textDecoration: 'none', fontWeight: 500 }}>About page</Link>.</p>
        </div>

      </main>
      <Footer />
    </>
  )
}