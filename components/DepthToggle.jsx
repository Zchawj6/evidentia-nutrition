'use client'
import { useState } from 'react'
import Badge from './Badge'

export default function DepthToggle({ entry, summaryContent, indepthContent }) {
  const [depth, setDepth] = useState('summary')

  const btnStyle = (active) => ({
    padding: '7px 20px', border: 'none', borderRadius: 6,
    fontSize: 13, fontWeight: 500, cursor: 'pointer',
    background: active ? '#fff' : 'none',
    color: active ? '#1A1A2E' : '#4A4A6A',
    boxShadow: active ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
    transition: 'all 0.15s',
  })

  return (
    <div>
      <div style={{ display: 'flex', gap: 0, background: '#F7FAFA', border: '1px solid #E2E8E8', borderRadius: 8, padding: 3, width: 'fit-content', margin: '20px 0' }}>
        <button style={btnStyle(depth === 'summary')} onClick={() => setDepth('summary')}>Summary</button>
        <button style={btnStyle(depth === 'indepth')} onClick={() => setDepth('indepth')}>In depth</button>
      </div>

      {depth === 'summary' && (
        <div>{summaryContent}</div>
      )}

      {depth === 'indepth' && (
        <div>
          {entry.additionalOutcomes && entry.additionalOutcomes.length > 0 && (
            <div style={{ background: '#fff', border: '1px solid #E2E8E8', borderRadius: 10, padding: '22px 24px', marginBottom: 12 }}>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: 16, color: '#1A1A2E', marginBottom: 14 }}>Evidence base by outcome</div>
              <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 , minWidth: 480 }}>
                <thead>
                  <tr>
                    {['Outcome', 'Rating', 'RCTs', 'Total N', 'Risk of bias', 'Consistency'].map(h => (
                      <th key={h} style={{ textAlign: 'left', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.6px', color: '#888', padding: '6px 10px', borderBottom: '1px solid #eee' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '8px 10px', borderBottom: '1px solid #f5f5f5', color: '#4A4A6A', fontSize: 13 }}>{entry.primaryOutcome}</td>
                    <td style={{ padding: '8px 10px', borderBottom: '1px solid #f5f5f5' }}><Badge rating={entry.primaryRating} size="sm" /></td>
                    <td style={{ padding: '8px 10px', borderBottom: '1px solid #f5f5f5', color: '#4A4A6A' }}>{entry.numberOfRCTs}</td>
                    <td style={{ padding: '8px 10px', borderBottom: '1px solid #f5f5f5', color: '#4A4A6A' }}>{entry.totalParticipantN?.toLocaleString()}</td>
                    <td style={{ padding: '8px 10px', borderBottom: '1px solid #f5f5f5', color: '#4A4A6A' }}>{entry.riskOfBiasSummary}</td>
                    <td style={{ padding: '8px 10px', borderBottom: '1px solid #f5f5f5', color: '#4A4A6A' }}>{entry.consistencyFlag}</td>
                  </tr>
                  {entry.additionalOutcomes.map((o, i) => (
                    <tr key={i}>
                      <td style={{ padding: '8px 10px', borderBottom: '1px solid #f5f5f5', color: '#4A4A6A' }}>{o.outcome}</td>
                      <td style={{ padding: '8px 10px', borderBottom: '1px solid #f5f5f5' }}><Badge rating={o.rating} size="sm" /></td>
                      <td style={{ padding: '8px 10px', borderBottom: '1px solid #f5f5f5', color: '#4A4A6A' }}>{o.numberOfRCTs}</td>
                      <td style={{ padding: '8px 10px', borderBottom: '1px solid #f5f5f5', color: '#4A4A6A' }}>{o.totalParticipantN?.toLocaleString()}</td>
                      <td style={{ padding: '8px 10px', borderBottom: '1px solid #f5f5f5', color: '#4A4A6A' }}>{o.riskOfBiasSummary}</td>
                      <td style={{ padding: '8px 10px', borderBottom: '1px solid #f5f5f5', color: '#4A4A6A' }}>{o.consistencyFlag}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {indepthContent}
        </div>
      )}
    </div>
  )
}
