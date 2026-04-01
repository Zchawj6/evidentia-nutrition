import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'About',
  description: 'About Evidentia Nutrition: our methodology, independence, and governance framework.',
}

const S = {
  section: { background: '#fff', border: '1px solid #E2E8E8', borderRadius: 10, padding: '28px 32px', marginBottom: 14 },
  h2: { fontFamily: 'Georgia, serif', fontSize: 19, color: '#1A1A2E', marginBottom: 12 },
  body: { fontSize: 15, color: '#4A4A6A', lineHeight: 1.75, marginBottom: 12 },
  label: { fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#1A6B72', marginBottom: 8, display: 'block' },
}

function Callout({ children }) {
  return (
    <div style={{ background: '#F7FAFA', borderLeft: '3px solid #1A6B72', borderRadius: '0 8px 8px 0', padding: '14px 18px', margin: '16px 0', fontSize: 14, color: '#4A4A6A', lineHeight: 1.7, fontStyle: 'italic' }}>
      {children}
    </div>
  )
}

function RatingPill({ rating, color, desc }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 10 }}>
      <span style={{ background: color, color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: '0.4px', textTransform: 'uppercase', padding: '3px 10px', borderRadius: 20, whiteSpace: 'nowrap', flexShrink: 0, marginTop: 2 }}>{rating}</span>
      <span style={{ fontSize: 14, color: '#4A4A6A', lineHeight: 1.6 }}>{desc}</span>
    </div>
  )
}

export default function About() {
  return (
    <>
      <Nav />
      <main style={{ maxWidth: 820, margin: '0 auto', padding: '40px 24px 64px' }}>

        <div style={{ marginBottom: 36 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: '#1A6B72', marginBottom: 12 }}>About Evidentia Nutrition</div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 30, color: '#1A1A2E', marginBottom: 16, lineHeight: 1.25 }}>A methodology, not just a position</h1>
          <p style={{ fontSize: 16, color: '#4A4A6A', lineHeight: 1.75, maxWidth: 640 }}>
            Nutrition advice is everywhere. Much of it is confident, commercially motivated, and not well-anchored to the evidence. Evidentia Nutrition exists to do something different: to apply rigorous, transparent evidence appraisal to nutritional science and communicate the results honestly, including when the honest answer is that we do not yet know.
          </p>
        </div>

        {/* The problem */}
        <div style={S.section}>
          <h2 style={S.h2}>The problem we are solving</h2>
          <p style={S.body}>
            Most public nutrition communication fails in one of two ways. Either it oversimplifies, presenting a single conclusion when the evidence is complex, contested, or population-specific. Or it is inaccessible, buried in academic language that excludes the people who need it most.
          </p>
          <p style={S.body}>
            The result is a space dominated by commercial claims dressed as science, observational associations presented as causal findings, and a chronic failure to distinguish between what the evidence actually shows and what supplement brands, influencers, and even well-meaning practitioners would like it to show.
          </p>
          <Callout>
            The gap Evidentia Nutrition fills is not more content. It is better appraisal: a visible, auditable method for evaluating evidence that readers can scrutinise and challenge.
          </Callout>
        </div>

        {/* How we evaluate evidence */}
        <div style={S.section}>
          <h2 style={S.h2}>How we evaluate evidence</h2>
          <p style={S.body}>
            Every claim on Evidentia Nutrition is assessed against an explicit evidence hierarchy and assigned a rating that reflects the totality of the evidence for that specific outcome in that specific population context. Ratings are not assigned to ingredients in general. An ingredient can have a Strong rating for deficiency correction and an Insufficient rating for cognitive enhancement. Both appear on the same entry.
          </p>

          <p style={{ ...S.body, fontWeight: 600, color: '#1A1A2E', marginBottom: 8 }}>Evidence hierarchy</p>
          <p style={S.body}>We prioritise human outcomes over surrogate markers, and controlled evidence over observational data. The hierarchy, from strongest to weakest, runs from systematic reviews and meta-analyses of randomised controlled trials, through individual RCTs, systematic reviews of observational studies, prospective cohort studies, to mechanistic and animal research. Mechanistic studies are used to explain biological plausibility. They are not used as the basis for evidence ratings.</p>

          <p style={{ ...S.body, fontWeight: 600, color: '#1A1A2E', marginBottom: 8, marginTop: 16 }}>Risk of bias</p>
          <p style={S.body}>Study design alone does not determine quality. We assess risk of bias within each study using named validated tools: RoB 2 for randomised trials, AMSTAR 2 for systematic reviews, and the Newcastle-Ottawa Scale for observational studies. Risk-of-bias findings directly affect evidence ratings through defined downgrade triggers documented in our published decision appendix.</p>

          <p style={{ ...S.body, fontWeight: 600, color: '#1A1A2E', marginBottom: 8, marginTop: 16 }}>Handling conflicting evidence</p>
          <p style={S.body}>Conflicting evidence is the norm in nutrition research, not the exception. Where studies reach different conclusions, entries explain the conflict and explore possible reasons: differences in population, baseline status, dose, form, duration, or study quality. We do not present false consensus. We give readers the tools to understand why studies disagree.</p>

          <p style={{ ...S.body, fontWeight: 600, color: '#1A1A2E', marginBottom: 8, marginTop: 16 }}>Form specificity</p>
          <p style={{ ...S.body, marginBottom: 16 }}>Evidence for one preparation of an ingredient does not automatically transfer to other preparations. Magnesium bisglycinate, citrate, and oxide have different bioavailability profiles and different evidence bases. The same is true for curcumin phytosome versus standard curcumin, methylcobalamin versus cyanocobalamin, and KSM-66 ashwagandha versus generic root powder. Where evidence is form-specific, we state clearly which form was studied and do not extend that evidence without a specific basis for doing so.</p>

          <p style={{ ...S.body, fontWeight: 600, color: '#1A1A2E', marginBottom: 12, marginTop: 16 }}>Evidence ratings</p>
          <RatingPill rating="Strong" color="#1A6B72" desc="Multiple well-designed RCTs or a high-quality systematic review with consistent findings, adequate sample sizes, low risk of bias, and outcomes directly relevant to the claim. Requires independent replication." />
          <RatingPill rating="Moderate" color="#2E6DA4" desc="Some controlled evidence with limitations in scale, design consistency, or applicability. May include well-designed observational evidence with plausible mechanistic support." />
          <RatingPill rating="Emerging" color="#7B5EA7" desc="Early-stage evidence: single trials, small samples, short duration, or predominantly mechanistic data. A positive signal exists but is insufficient to support confident claims." />
          <RatingPill rating="Insufficient" color="#888888" desc="Human evidence is absent, too weak to interpret, or so contradictory that no directional conclusion is possible. This is not a negative finding. It means we do not yet know." />

          <div style={{ marginTop: 16 }}>
            <Link href="/methodology" style={{ fontSize: 14, color: '#1A6B72', textDecoration: 'none', fontWeight: 500 }}>
              Read the full methodology and decision appendix →
            </Link>
          </div>
        </div>

        {/* What we do not do */}
        <div style={S.section}>
          <h2 style={S.h2}>What Evidentia Nutrition is not</h2>
          <p style={S.body}>Evidentia Nutrition is an educational resource. It does not provide individual health advice, clinical recommendations, or therapeutic guidance. Where evidence exists only for specific populations, this is stated explicitly. Where evidence is weak or absent, we say so directly rather than hedging with language that implies more certainty than exists.</p>
          <p style={S.body}>We do not accept commercial sponsorship, affiliate arrangements, or any funding relationship that could create a conflict of interest with our evidence appraisal role. Advertising does not appear on this site.</p>
          <Callout>
            "Where evidence is limited, we say so. Where findings apply only to specific populations, we state that clearly. Where commercial claims exceed what the evidence supports, we identify the gap."
          </Callout>
        </div>

        {/* Governance */}
        <div style={S.section}>
          <h2 style={S.h2}>Governance and oversight</h2>
          <p style={S.body}>
            Evidentia Nutrition is founded and directed by a surgeon and Professor at University College London, with an MSc in Evidence-Based Healthcare from the University of Oxford. The editorial methodology was developed from first principles and reviewed against established evidence appraisal frameworks including GRADE, RoB 2, and AMSTAR 2.
          </p>
          <p style={S.body}>
            An advisory board comprising registered dieticians, clinical academics, and public health specialists provides independent oversight. Member details will be published with their consent.
          </p>
          <p style={S.body}>
            All entries follow a five-stage editorial workflow: scoping with PICO framing, structured literature search, risk-of-bias appraisal using named tools, evidence rating against published decision thresholds, and review before publication. The full workflow is documented and available on request.
          </p>
        </div>

        {/* Funding */}
        <div style={S.section}>
          <h2 style={S.h2}>Funding</h2>
          <p style={S.body}>
            Evidentia Nutrition is currently founder-funded. There are no commercial sponsors, no affiliate relationships, and no advertising. The organisation is operated with a non-commercial educational mission and is working towards a formal non-profit structure.
          </p>
          <p style={{ ...S.body, marginBottom: 0 }}>
            Any external funding accepted in the future will be disclosed here in full, along with the terms under which it was accepted and an assessment of any conflict of interest implications.
          </p>
        </div>

        {/* COI */}
        <div id="conflicts" style={S.section}>
          <h2 style={S.h2}>Conflicts of interest</h2>
          <p style={S.body}>
            All individuals contributing to Evidentia Nutrition content make annual written declarations of relevant interests. Declared interests that are relevant to a specific entry are noted on that entry. A summary of declared interests is reviewed annually.
          </p>
          <p style={S.body}>
            The founding director holds a clinical leadership role at Personally (Supplement Technology Limited), a direct-to-consumer personalised supplement company. Evidentia Nutrition is legally and operationally independent of Personally. There is no commercial relationship between the two organisations and Evidentia content does not promote or reference Personally's products. Topics that directly overlap with Personally's commercial ingredient range are reviewed by an advisory board member before publication. This arrangement is reviewed annually.
          </p>
          <p style={{ ...S.body, marginBottom: 0 }}>
            Evidentia Nutrition does not accept commercial sponsorship, affiliate arrangements, or any funding relationship that could create a conflict of interest with its evidence appraisal role.
          </p>
        </div>

        {/* Contact */}
        <div style={{ ...S.section, marginBottom: 0 }}>
          <h2 style={S.h2}>Corrections and contact</h2>
          <p style={S.body}>
            Correction requests are taken seriously and reviewed against the published editorial methodology. If you have identified a factual error, a study we have not considered, or a risk-of-bias concern with our appraisal of a specific entry, we want to hear from you.
          </p>
          <Link href="/contact" style={{ fontSize: 14, color: '#1A6B72', textDecoration: 'none', fontWeight: 500 }}>
            Submit a correction or get in touch →
          </Link>
        </div>

      </main>
      <Footer />
    </>
  )
}
