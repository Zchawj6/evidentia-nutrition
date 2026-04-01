import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Terms of use',
  description: 'Terms governing use of the Evidentia Nutrition website.',
}

export default function Terms() {
  return (
    <>
      <Nav />
      <main style={{ maxWidth: 820, margin: '0 auto', padding: '40px 24px 64px' }}>

        <div style={{ marginBottom: 36 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: '#1A6B72', marginBottom: 12 }}>Legal</div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 30, color: '#1A1A2E', marginBottom: 16, lineHeight: 1.25 }}>Terms of use</h1>
          <p style={{ fontSize: 15, color: '#4A4A6A', lineHeight: 1.75, maxWidth: 640 }}>Last updated: April 2025</p>
        </div>

        <div style={{ fontSize: 15, color: '#4A4A6A', lineHeight: 1.75, maxWidth: 640 }}>

          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 19, color: '#1A1A2E', marginBottom: 12, marginTop: 32 }}>Nature of this site</h2>
          <p style={{ marginBottom: 16 }}>Evidentia Nutrition provides independent, evidence-rated reviews of nutritional ingredients and interventions for educational purposes only. Nothing on this site constitutes medical advice, a diagnosis, or a treatment recommendation. Always consult a qualified clinician before making decisions about your health or supplementation.</p>

          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 19, color: '#1A1A2E', marginBottom: 12, marginTop: 32 }}>Accuracy and updates</h2>
          <p style={{ marginBottom: 16 }}>We make every effort to ensure content is accurate, current, and correctly interpreted. Evidence evolves, and entries are updated when material new evidence emerges. Each entry carries a review date. If you believe something is incorrect, please use the <a href="/contact" style={{ color: '#1A6B72' }}>contact page</a> to submit a correction request.</p>

          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 19, color: '#1A1A2E', marginBottom: 12, marginTop: 32 }}>Use of content</h2>
          <p style={{ marginBottom: 16 }}>Content on this site may be referenced for personal or educational use with appropriate attribution. It may not be reproduced for commercial purposes, repackaged as proprietary content, or used in a way that misrepresents its original framing or conclusions.</p>

          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 19, color: '#1A1A2E', marginBottom: 12, marginTop: 32 }}>Independence</h2>
          <p style={{ marginBottom: 16 }}>Evidentia Nutrition does not accept commercial sponsorship or affiliate arrangements. Structural conflicts of interest are disclosed on the <a href="/about#conflicts" style={{ color: '#1A6B72' }}>about page</a>.</p>

          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 19, color: '#1A1A2E', marginBottom: 12, marginTop: 32 }}>Limitation of liability</h2>
          <p style={{ marginBottom: 16 }}>Evidentia Nutrition accepts no liability for decisions made on the basis of content published here. Use of this site is at your own discretion.</p>

        </div>
      </main>
      <Footer />
    </>
  )
}