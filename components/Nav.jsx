'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 700)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const links = [['Evidence library', '/library'], ['Articles', '/articles'], ['Methodology', '/methodology'], ['About', '/about']]

  return (
    <nav style={{ background: '#fff', borderBottom: '1px solid #E2E8E8', position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56 }}>
        <Link href="/" style={{ fontFamily: 'Georgia, serif', fontSize: 17, fontWeight: 700, color: '#1A6B72', textDecoration: 'none', letterSpacing: '-0.3px' }}>
          Evidentia Nutrition
        </Link>
        {isMobile ? (
          <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex', flexDirection: 'column', gap: 5 }}>
            <span style={{ display: 'block', width: 22, height: 2, background: '#1A1A2E', borderRadius: 2 }} />
            <span style={{ display: 'block', width: 22, height: 2, background: '#1A1A2E', borderRadius: 2 }} />
            <span style={{ display: 'block', width: 22, height: 2, background: '#1A1A2E', borderRadius: 2 }} />
          </button>
        ) : (
          <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            {links.map(([label, href]) => (
              <Link key={href} href={href} style={{ fontSize: 14, color: '#4A4A6A', textDecoration: 'none', fontWeight: 500 }}>
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
      {isMobile && open && (
        <div style={{ background: '#fff', borderTop: '1px solid #E2E8E8', padding: '12px 24px 16px' }}>
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} style={{ display: 'block', fontSize: 15, color: '#4A4A6A', textDecoration: 'none', fontWeight: 500, padding: '10px 0', borderBottom: '1px solid #F0F0F0' }}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
