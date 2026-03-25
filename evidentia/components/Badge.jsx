const config = {
  Strong:      { bg: '#1A6B72', label: 'Strong' },
  Moderate:    { bg: '#2E6DA4', label: 'Moderate' },
  Emerging:    { bg: '#7B5EA7', label: 'Emerging' },
  Insufficient:{ bg: '#888888', label: 'Insufficient' },
}

export default function Badge({ rating, size = 'md' }) {
  const c = config[rating] || config['Insufficient']
  const pad = size === 'sm' ? '2px 7px' : '3px 10px'
  const fs  = size === 'sm' ? 10 : 11
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      background: c.bg, color: '#fff',
      padding: pad, borderRadius: 20,
      fontSize: fs, fontWeight: 700,
      letterSpacing: '0.4px', textTransform: 'uppercase',
      whiteSpace: 'nowrap', fontFamily: 'Inter, system-ui, sans-serif'
    }}>
      <span style={{ width: 5, height: 5, background: 'rgba(255,255,255,0.65)', borderRadius: '50%', flexShrink: 0 }} />
      {c.label}
    </span>
  )
}
