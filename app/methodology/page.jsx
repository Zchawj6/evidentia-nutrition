import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Badge from '../../components/Badge'

export const metadata = { title: 'Methodology', description: 'How Evidentia Nutrition assesses and rates nutritional evidence.' }

const S = { section: { background: '#fff', border: '1px solid #E2E8E8', borderRadius: 10, padding: '24px 28px', marginBottom: 14 }, h2: { fontFamily: 'Georgia, serif', fontSize: 18, color: '#1A1A2E', marginBottom: 12 }, body: { fontSize: 15, color: '#4A4A6A', lineHeight: 1.7, marginBottom: 10 } }

export default function Methodology() {
  return (
    <>
      <Nav />
      <main style={{ maxWidth: 820, margin: '0 auto', padding: '40px 24px 64px' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: '#1A6B72', marginBottom: 12 }}>How we work</div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 30, color: '#1A1A2E', marginBottom: 14 }}>Our methodology</h1>
          <p style={{ fontSize: 16, color: '#4A4A6A', lineHeight: 1.7, maxWidth: 600 }}>
            Every entry on Evidentia Nutrition follows the same appraisal process. This page explains how we assess evidence, assign ratings, and handle uncertainty. The full methodology and decision appendix are available on request via the contact page.
          </p>
        </div>

        <div style={S.section}>
          <h2 style={S.h2}>How do you decide what counts as good evidence?</h2>
          <p style={S.body}>We follow an evidence hierarchy that prioritises human outcomes over surrogate markers, and controlled evidence over observational data. Systematic reviews and meta-analyses of randomised controlled trials sit at the top. Mechanistic and animal studies are used to explain biological plausibility, but they are not used as the basis for evidence ratings. We name the specific appraisal tools we use: RoB 2 for randomised trials, AMSTAR 2 for systematic reviews, and the Newcastle-Ottawa Scale for observational studies.</p>
          <p style={S.body}>We also acknowledge the specific methodological challenges of nutrition research: the dominance of short-duration trials, surrogate endpoints, industry funding bias, and the difficulty of blinding dietary interventions. These are noted where relevant in every entry.</p>
        </div>

        <div style={S.section}>
          <h2 style={S.h2}>What do the ratings mean?</h2>
          <p style={S.body}>Ratings are assigned to specific outcomes, not to ingredients in general. An ingredient may have a Strong rating for deficiency correction and an Emerging rating for cognitive performance. Both appear on the same entry.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 16 }}>
            {[
              { rating: 'Strong', desc: 'Multiple well-designed RCTs or a high-quality systematic review with consistent findings, adequate sample sizes, low risk of bias, and outcomes directly relevant to the claim. Requires independent replication.' },
              { rating: 'Moderate', desc: 'Some controlled evidence with limitations in scale, design consistency, or applicability. May include well-designed observational evidence with plausible mechanistic support.' },
              { rating: 'Emerging', desc: 'Early-stage evidence: single trials, small samples, short duration, or predominantly mechanistic data. Positive signal exists but is insufficient for confident claims.' },
              { rating: 'Insufficient', desc: 'Human evidence is absent, too weak to interpret, or so contradictory that no directional conclusion is possible. This is not a negative finding: it means we do not yet know.' },
            ].map(({ rating, desc }) => (
              <div key={rating} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, paddingTop: 2 }}><Badge rating={rating} /></div>
                <p style={{ fontSize: 14, color: '#4A4A6A', lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={S.section}>
          <h2 style={S.h2}>How do you handle conflicting studies?</h2>
          <p style={S.body}>Conflicting evidence is the norm in nutrition research, not the exception. Where studies reach different conclusions, entries explain the conflict and explore possible reasons: differences in population studied, baseline status, dose, form, duration, outcome measurement, or study quality. We give readers the tools to understand why studies disagree rather than presenting a false consensus.</p>
          <p style={S.body}>Negative trials and null findings are as important as positive ones and are always included in evidence summaries.</p>
        </div>

        <div style={S.section}>
          <h2 style={S.h2}>What is form-specific evidence and why does it matter?</h2>
          <p style={S.body}>Evidence for one preparation of an ingredient does not automatically transfer to other preparations of the same ingredient. Magnesium bisglycinate, citrate, malate, and oxide have different bioavailability profiles and different evidence bases. The same is true for curcumin phytosome versus standard curcumin, methylcobalamin versus cyanocobalamin, and methylfolate versus folic acid.</p>
          <p style={S.body}>Where evidence is form-specific, entries state clearly which form was studied and do not extend that evidence to other forms without a specific basis for doing so. This is one of the most consistently under-communicated principles in public nutrition information.</p>
        </div>

        <div style={S.section}>
          <h2 style={S.h2}>Who writes and reviews the entries?</h2>
          <p style={S.body}>Entries are written and reviewed by the founding director, a surgeon and professor with an Oxford MSc in Evidence-Based Healthcare. An advisory board of registered dieticians, clinical academics, and public health specialists provides oversight of the methodology and reviews entries in areas requiring specialist input before publication.</p>
          <p style={S.body}>Conflicts of interest are declared on the about page and where relevant on individual entries. The founding director holds a clinical leadership role at Personally, a personalised supplement company. This relationship is disclosed, and a recusal framework governs which entries are independently reviewed as a result.</p>
        </div>

        <div style={S.section}>
          <h2 style={S.h2}>How often is content updated?</h2>
          <p style={S.body}>All entries are reviewed on a standard cycle of 18 to 24 months, depending on the pace of evidence development in that area. Entries are also reviewed out of cycle when a significant new trial is published, when a regulatory decision or safety alert is relevant, or when a credible correction is submitted by a reader or practitioner. The last reviewed date and version number appear on every entry. Material corrections are noted visibly on the entry rather than silently amended.</p>
        </div>

        <div style={{ background: '#E8F4F5', border: '1px solid #C5D8DA', borderRadius: 10, padding: '20px 24px', marginTop: 24 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#0D4A50', marginBottom: 6 }}>Full methodology documents</div>
          <div style={{ fontSize: 13, color: '#1A6B72', lineHeight: 1.6 }}>
            The complete Editorial and Appraisal Methodology, Decision Appendix, and Governance Framework are available on request. Contact us via the contact page.
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
