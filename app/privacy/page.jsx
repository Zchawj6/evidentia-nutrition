import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Privacy policy',
  description: 'How Evidentia Nutrition handles data collected through this site.',
}

export default function Privacy() {
  return (
    <>
      <Nav />
      <main style={{ maxWidth: 820, margin: '0 auto', padding: '40px 24px 64px' }}>

        <div style={{ marginBottom: 36 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: '#1A6B72', marginBottom: 12 }}>Legal</div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 30, color: '#1A1A2E', marginBottom: 16, lineHeight: 1.25 }}>Privacy policy</h1>
          <p style={{ fontSize: 15, color: '#4A4A6A', lineHeight: 1.75, maxWidth: 640 }}>Last updated: April 2025</p>
        </div>

        <div style={{ fontSize: 15, color: '#4A4A6A', lineHeight: 1.75, maxWidth: 640 }}>

          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 19, color: '#1A1A2E', marginBottom: 12, marginTop: 32 }}>What this site is</h2>
          <p style={{ marginBottom: 16 }}>Evidentia Nutrition is a free, independent educational resource. We do not sell products, run advertising, or operate a membership system. This policy explains what limited data we collect and why.</p>

          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 19, color: '#1A1A2E', marginBottom: 12, marginTop: 32 }}>Data we collect</h2>
          <p style={{ marginBottom: 16 }}>We do not collect personal data directly. If you contact us via the contact page, any information you include in that message is used solely to respond to your enquiry and is not stored beyond that exchange.</p>
          <p style={{ marginBottom: 16 }}>This site may use basic analytics to understand aggregate traffic patterns (for example, which pages are visited most). If so, this data is anonymous and cannot be used to identify individuals.</p>

          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 19, color: '#1A1A2E', marginBottom: 12, marginTop: 32 }}>Cookies</h2>
          <p style={{ marginBottom: 16 }}>We do not use tracking cookies or third-party advertising cookies. Any cookies set are functional and limited to site operation.</p>

          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 19, color: '#1A1A2E', marginBottom: 12, marginTop: 32 }}>Third-party services</h2>
          <p style={{ marginBottom: 16 }}>This site is hosted on Vercel. Their privacy policy governs any data processed at the infrastructure level. We do not share data with any other third parties.</p>

          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 19, color: '#1A1A2E', marginBottom: 12, marginTop: 32 }}>Your rights</h2>
          <p style={{ marginBottom: 16 }}>If you have contacted us and would like any record of that correspondence deleted, please get in touch via the contact page and we will action that straight away.</p>

          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 19, color: '#1A1A2E', marginBottom: 12, marginTop: 32 }}>Contact</h2>
          <p style={{ marginBottom: 16 }}>Questions about this policy can be sent via the <a href="/contact" style={{ color: '#1A6B72' }}>contact page</a>.</p>

        </div>
      </main>
      <Footer />
    </>
  )
}