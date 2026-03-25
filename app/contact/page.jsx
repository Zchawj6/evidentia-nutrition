import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata = { title: 'Contact', description: 'Contact Evidentia Nutrition for corrections, enquiries, or practitioner questions.' }

export default function Contact() {
  return (
    <>
      <Nav />
      <main style={{ maxWidth: 640, margin: '0 auto', padding: '40px 24px 64px' }}>
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 30, color: '#1A1A2E', marginBottom: 12 }}>Contact</h1>
          <p style={{ fontSize: 15, color: '#4A4A6A', lineHeight: 1.7 }}>Use this form for corrections, practitioner enquiries, or general questions. Correction requests are taken seriously and reviewed against the editorial methodology.</p>
        </div>

        <div style={{ background: '#fff', border: '1px solid #E2E8E8', borderRadius: 10, padding: '28px' }}>
          <form action="https://formspree.io/f/placeholder" method="POST">
            {[
              { label: 'Your name', name: 'name', type: 'text' },
              { label: 'Email address', name: 'email', type: 'email' },
            ].map(f => (
              <div key={f.name} style={{ marginBottom: 18 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#1A1A2E', marginBottom: 6 }}>{f.label}</label>
                <input type={f.type} name={f.name} required style={{ width: '100%', border: '1.5px solid #E2E8E8', borderRadius: 7, padding: '9px 12px', fontSize: 14, fontFamily: 'Inter, system-ui, sans-serif', outline: 'none' }} />
              </div>
            ))}

            <div style={{ marginBottom: 18 }}>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#1A1A2E', marginBottom: 6 }}>Type of enquiry</label>
              <select name="type" style={{ width: '100%', border: '1.5px solid #E2E8E8', borderRadius: 7, padding: '9px 12px', fontSize: 14, fontFamily: 'Inter, system-ui, sans-serif', background: '#fff' }}>
                <option>Correction or factual feedback</option>
                <option>Practitioner enquiry</option>
                <option>Research or media enquiry</option>
                <option>General question</option>
              </select>
            </div>

            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#1A1A2E', marginBottom: 6 }}>Message</label>
              <textarea name="message" rows={5} required style={{ width: '100%', border: '1.5px solid #E2E8E8', borderRadius: 7, padding: '9px 12px', fontSize: 14, fontFamily: 'Inter, system-ui, sans-serif', resize: 'vertical', outline: 'none' }} />
            </div>

            <button type="submit" style={{ background: '#1A6B72', color: '#fff', border: 'none', borderRadius: 8, padding: '11px 24px', fontSize: 14, fontWeight: 500, cursor: 'pointer' }}>
              Send message
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}
