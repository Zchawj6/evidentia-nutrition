import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#fff', borderTop: '1px solid #E2E8E8', marginTop: 64 }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '36px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 32, flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontFamily: 'Georgia, serif', fontSize: 15, fontWeight: 700, color: '#1A6B72', marginBottom: 8 }}>Evidentia Nutrition</div>
          <div style={{ fontSize: 13, color: '#888', lineHeight: 1.6, maxWidth: 280 }}>
            Independent, evidence-rated reviews of nutritional ingredients and interventions.
          </div>
        </div>
        <div style={{ display: 'flex', gap: 48 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px', color: '#888', marginBottom: 12 }}>Site</div>
            {[['Evidence library', '/library'], ['Methodology', '/methodology'], ['About', '/about'], ['Contact', '/contact']].map(([l, h]) => (
              <div key={h} style={{ marginBottom: 8 }}>
                <Link href={h} style={{ fontSize: 13, color: '#4A4A6A', textDecoration: 'none' }}>{l}</Link>
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px', color: '#888', marginBottom: 12 }}>Legal</div>
            {[['Privacy policy', '/privacy'], ['Terms of use', '/terms'], ['Conflict of interest', '/about#conflicts']].map(([l, h]) => (
              <div key={h} style={{ marginBottom: 8 }}>
                <Link href={h} style={{ fontSize: 13, color: '#4A4A6A', textDecoration: 'none' }}>{l}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid #E2E8E8', padding: '16px 24px', textAlign: 'center', fontSize: 12, color: '#aaa' }}>
        Evidentia Nutrition is an independent educational resource. Content is not medical advice.
        &copy; {new Date().getFullYear()} Evidentia Nutrition.
      </div>
    </footer>
  )
}
