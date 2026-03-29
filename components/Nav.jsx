'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <nav style={{ background: '#fff', borderBottom: '1px solid #E2E8E8', position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56 }}>
        <Link href="/" style={{ fontFamily: 'Georgia, serif', fontSize: 17, fontWeight: 700, color: '#1A6B72', textDecoration: 'none', letterSpacing: '-0.3px' }}>
          Evidentia Nutrition
        </Link>
        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          {[['Evidence library', '/library'], ['Articles', '/articles'], ['Methodology', '/methodology'], ['About', '/about']].map(([label, href]) => (
            <Link key={href} href={href} style={{ fontSize: 14, color: '#4A4A6A', textDecoration: 'none', fontWeight: 500 }}>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
