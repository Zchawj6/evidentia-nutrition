import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Editorial Standards for Contributors | Evidentia Nutrition',
  description: 'The full editorial requirements for external contributors, covering evidence standards, evidence rating thresholds, the downgrade framework, effect-size reporting, writing style, format, and the contributor checklist.',
}

export default function EditorialStandardsPage() {
  return (
    <>
      <Nav />
      <main style={{ backgroundColor: '#faf8f4', minHeight: '100vh' }}>

        <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2ddd5', padding: '48px 24px 40px' }}>
          <div style={{ maxWidth: 740, margin: '0 auto' }}>
            <Link href="/contribute" style={{ fontSize: 13, color: '#1A6B72', textDecoration: 'none', display: 'inline-block', marginBottom: 20 }}>← Back to contribute</Link>
            <span style={{ display: 'block', fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0d7377', marginBottom: 10 }}>Editorial standards</span>
            <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 34, color: '#1A1A2E', lineHeight: 1.2, marginBottom: 16 }}>Editorial Standards for Contributors</h1>
            <p style={{ fontSize: 16, color: '#3d3d3a', lineHeight: 1.7, maxWidth: 620 }}>The full editorial requirements that apply to all external contributions. Read this before drafting. It covers evidence standards, rating thresholds, the downgrade framework, writing style, format requirements, and the contributor checklist.</p>
          </div>
        </div>

        <div style={{ maxWidth: 740, margin: '0 auto', padding: '48px 24px 80px' }}>

          {[
            {
              id: 'what-evidentia-is',
              heading: 'What Evidentia is',
              body: [
                'Evidentia is an independent evidence-based supplement library and commentary platform. It exists to give readers an accurate account of what the clinical evidence supports, what it does not, and what remains genuinely uncertain.',
                'The editorial position is sceptical by default. We do not assume that a supplement works until the evidence shows otherwise. We require evidence to be judged on its quality and scope before conclusions are drawn from it. Marketing claims are not evidence.',
                'Contributors are expected to share this orientation. Submissions that advocate for a supplement, assume clinical benefit from mechanistic data, or reach conclusions not supported by the cited evidence will not be accepted.',
              ]
            },
          ].map(s => (
            <section key={s.id} style={{ marginBottom: 48, paddingBottom: 48, borderBottom: '1px solid #e2ddd5' }}>
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 24, color: '#1A1A2E', marginBottom: 20 }}>{s.heading}</h2>
              {s.body.map((p, i) => <p key={i} style={{ color: '#3d3d3a', fontSize: 16, lineHeight: 1.75, marginBottom: 14 }}>{p}</p>)}
            </section>
          ))}

          <section style={{ marginBottom: 48, paddingBottom: 48, borderBottom: '1px solid #e2ddd5' }}>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 24, color: '#1A1A2E', marginBottom: 20 }}>Evidence standards</h2>

            <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 18, color: '#1A1A2E', marginBottom: 12, marginTop: 32 }}>The evidence hierarchy</h3>
            <p style={{ color: '#3d3d3a', fontSize: 16, lineHeight: 1.75, marginBottom: 14 }}>Evidentia applies a standard evidence hierarchy. In descending order of weight:</p>
            <p style={{ color: '#3d3d3a', fontSize: 16, lineHeight: 1.75, marginBottom: 14 }}>Systematic reviews and meta-analyses of randomised controlled trials carry the most weight, subject to quality assessment. A meta-analysis of poor-quality trials does not produce strong evidence.</p>
            <p style={{ color: '#3d3d3a', fontSize: 16, lineHeight: 1.75, marginBottom: 14 }}>Individual randomised controlled trials are assessed for sample size, duration, blinding, allocation concealment, and industry funding. Small trials with industry funding are treated with explicit caution.</p>
            <p style={{ color: '#3d3d3a', fontSize: 16, lineHeight: 1.75, marginBottom: 14 }}>Observational studies, cohort data, and case series can provide context and generate hypotheses. They cannot establish causation and must not be presented as though they can.</p>
            <p style={{ color: '#3d3d3a', fontSize: 16, lineHeight: 1.75, marginBottom: 14 }}>Mechanistic and preclinical evidence is used to explain proposed pathways, not to support clinical conclusions. The phrase "may help" based solely on in vitro or animal data is not an acceptable evidence claim.</p>

            <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 18, color: '#1A1A2E', marginBottom: 12, marginTop: 32 }}>Separating mechanism from outcome</h3>
            <p style={{ color: '#3d3d3a', fontSize: 16, lineHeight: 1.75, marginBottom: 14 }}>This is the most common error in supplement writing and the one we are most rigorous about. The following are distinct and must be treated as such in all submissions:</p>
            <p style={{ color: '#3d3d3a', fontSize: 16, lineHeight: 1.75, marginBottom: 14 }}>A proposed biological mechanism describes how a compound might plausibly produce an effect. It does not demonstrate that the effect occurs in humans at supplemental doses.</p>
            <p style={{ color: '#3d3d3a', fontSize: 16, lineHeight: 1.75, marginBottom: 14 }}>A biomarker change describes a measurable laboratory shift, for example a reduction in a blood marker. It is not equivalent to a clinical outcome unless the biomarker has been validated as a surrogate for that outcome in the relevant population.</p>
            <p style={{ color: '#3d3d3a', fontSize: 16, lineHeight: 1.75, marginBottom: 14 }}>A clinical outcome describes a meaningful change in health, function, or disease course in humans, demonstrated in a controlled setting.</p>
            <p style={{ color: '#3d3d3a', fontSize: 16, lineHeight: 1.75, marginBottom: 14 }}>Mechanistic evidence may be used to explain why a clinical effect is biologically plausible, or to frame a research gap. It may not be used to argue that a clinical effect is probable or likely. Where mechanistic data conflicts with null trial results, the trial results take precedence.</p>

            <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 18, color: '#1A1A2E', marginBottom: 16, marginTop: 32 }}>Evidence ratings</h3>
            <p style={{ color: '#3d3d3a', fontSize: 16, lineHeight: 1.75, marginBottom: 20 }}>All library entries carry a primary evidence rating and ratings for individual outcome areas. These thresholds describe what the full evidence base must support — they are not targets to be reached with selective citation.</p>

            {[
              { rating: 'Strong', color: '#2a7a4b', bg: '#eaf4ef', text: 'Requires at least three independent randomised controlled trials with low risk of bias, conducted by different research groups, showing consistent direction of effect, with effect sizes and target populations well-characterised across trials. Strong ratings always carry a scope limitation. No supplement receives a blanket Strong rating.' },
              { rating: 'Moderate', color: '#c97b2a', bg: '#fdf3e7', text: 'Applies where at least one RCT exists but the evidence base has meaningful limitations: inconsistent replication, small sample sizes, short trial duration, single research group, or evidence restricted to a narrowly defined population.' },
              { rating: 'Emerging', color: '#0d7377', bg: '#e8f4f4', text: 'Applies where evidence is limited to one or two trials, available trials have a high risk of bias, sample sizes are small (typically fewer than 50 per arm), or findings have not been replicated outside the originating research group. Emerging does not imply promising.' },
              { rating: 'Insufficient', color: '#6b6b66', bg: '#f5f4f0', text: 'Applies where no RCT evidence exists, available evidence is conflicting with no discernible signal, or the evidence base consists entirely of preclinical or mechanistic work.' },
            ].map(r => (
              <div key={r.rating} style={{ backgroundColor: r.bg, borderRadius: 6, padding: '14px 16px', marginBottom: 12 }}>
                <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: r.color, display: 'block', marginBottom: 6 }}>{r.rating}</span>
                <p style={{ fontSize: 14, color: '#3d3d3a', margin: 0, lineHeight: 1.65 }}>{r.text}</p>
              </div>
            ))}
            <p style={{ color: '#3d3d3a', fontSize: 15, lineHeight: 1.7, marginTop: 16, fontStyle: 'italic' }}>When uncertain between two ratings, apply the lower one and state the reason explicitly.</p>

            <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 18, color: '#1A1A2E', marginBottom: 12, marginTop: 32 }}>Downgrading for risk of bias</h3>
            <p style={{ color: '#3d3d3a', fontSize: 16, lineHeight: 1.75, marginBottom: 14 }}>Assigning a rating is not the final step. The following each require a mandatory downgrade of one level, or an explicit justification for not downgrading:</p>
            {[
              'High risk of bias on the primary supporting trials, including inadequate blinding, allocation concealment failures, or high attrition.',
              'Industry funding of the primary supporting trials where no independent replication exists.',
              'All supporting evidence originating from a single research group with no independent replication.',
              'Primary trial sample sizes below 50 participants per arm across the evidence base.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 10 }}>
                <span style={{ flexShrink: 0, width: 6, height: 6, borderRadius: '50%', backgroundColor: '#b5342a', marginTop: 9 }}></span>
                <p style={{ fontSize: 15, color: '#3d3d3a', margin: 0, lineHeight: 1.7 }}>{item}</p>
              </div>
            ))}
            <p style={{ color: '#3d3d3a', fontSize: 15, lineHeight: 1.7, marginTop: 12 }}>Where multiple factors apply simultaneously, a two-level downgrade should be considered. Where a contributor believes a downgrade is not warranted, the case must be made explicitly in the IN DEPTH section.</p>

            <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 18, color: '#1A1A2E', marginBottom: 12, marginTop: 32 }}>Effect size reporting</h3>
            <p style={{ color: '#3d3d3a', fontSize: 16, lineHeight: 1.75, marginBottom: 14 }}>Outcome claims must include quantitative effect size data where available. Stating that a supplement "significantly reduced" a marker without specifying the magnitude is not acceptable. Where effect sizes are reported in source trials, they must be included with the appropriate unit and confidence interval.</p>
            <p style={{ color: '#3d3d3a', fontSize: 16, lineHeight: 1.75, marginBottom: 14 }}>Where effect size data is genuinely unavailable, this absence must be stated directly rather than worked around with qualitative language. Absolute risk changes are preferred over relative risk where both are available.</p>

            <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 18, color: '#1A1A2E', marginBottom: 12, marginTop: 32 }}>Industry funding</h3>
            <p style={{ color: '#3d3d3a', fontSize: 16, lineHeight: 1.75, marginBottom: 14 }}>All industry-funded trials must be flagged. The specific funder must be named. The directional consequence of funder bias (typically effect size inflation) must be acknowledged. Submissions that cite industry-funded trials as though they were independent evidence will be returned for revision.</p>

            <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 18, color: '#1A1A2E', marginBottom: 12, marginTop: 32 }}>Reference verification</h3>
            <p style={{ color: '#3d3d3a', fontSize: 16, lineHeight: 1.75, marginBottom: 14 }}>Every reference must be verified against the primary source before submission. The DOI must resolve to the correct paper. Author names, year, journal, and sample size must match what is stated in the body of the submission. The paper must directly support the specific claim it is cited for.</p>
            <p style={{ color: '#3d3d3a', fontSize: 16, lineHeight: 1.75, marginBottom: 14 }}>References must be formatted in Harvard style with the full DOI included. Preprints must be labelled as such and cannot serve as primary support for major clinical claims.</p>
          </section>

          <section style={{ marginBottom: 48, paddingBottom: 48, borderBottom: '1px solid #e2ddd5' }}>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 24, color: '#1A1A2E', marginBottom: 20 }}>Writing style</h2>
            <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 18, color: '#1A1A2E', marginBottom: 12 }}>Prose only</h3>
            <p style={{ color: '#3d3d3a', fontSize: 16, lineHeight: 1.75, marginBottom: 14 }}>All body text must be written in full prose paragraphs. No bullet points, no numbered lists, no bold subheadings within body sections. Headers use H2 level only. This is not a stylistic preference — prose forces precision that bullet points do not.</p>
            <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 18, color: '#1A1A2E', marginBottom: 12, marginTop: 28 }}>Calibrated language</h3>
            <p style={{ color: '#3d3d3a', fontSize: 16, lineHeight: 1.75, marginBottom: 10 }}>Preferred: modest, limited, inconsistent, preliminary, suggestive, not established, not demonstrated in humans, restricted to deficiency populations, based on biomarker data only.</p>
            <p style={{ color: '#3d3d3a', fontSize: 16, lineHeight: 1.75, marginBottom: 14 }}>Not acceptable: proven, boosts, enhances (unless referring to a specific quantified change in a specific population), notable signal, shows promise, compelling evidence (unless the evidence genuinely is).</p>
            <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 18, color: '#1A1A2E', marginBottom: 12, marginTop: 28 }}>Scope precision</h3>
            <p style={{ color: '#3d3d3a', fontSize: 16, lineHeight: 1.75, marginBottom: 14 }}>Evidence almost always has a defined scope. State it. "Magnesium supplementation improves sleep" is not acceptable. "Magnesium supplementation reduced sleep onset latency in older adults with low dietary magnesium intake, based on two small randomised controlled trials" is acceptable.</p>
            <p style={{ color: '#3d3d3a', fontSize: 16, lineHeight: 1.75, marginBottom: 14 }}>Deficiency and replete populations must be distinguished. Female life stages (perimenopause, menopause, pregnancy, fertility) must be addressed wherever relevant evidence exists.</p>
          </section>

          <section style={{ marginBottom: 48, paddingBottom: 48, borderBottom: '1px solid #e2ddd5' }}>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 24, color: '#1A1A2E', marginBottom: 20 }}>Conflict of interest policy</h2>
            <p style={{ color: '#3d3d3a', fontSize: 16, lineHeight: 1.75, marginBottom: 14 }}>All contributors must submit a conflict of interest declaration alongside their draft. This must cover any financial relationship with supplement manufacturers (consultancy, advisory roles, speaker fees, equity), research funding from industry sources relevant to the submission, and any personal advocacy that could reasonably affect objectivity.</p>
            <p style={{ color: '#3d3d3a', fontSize: 16, lineHeight: 1.75, marginBottom: 14 }}>The declaration is published alongside the contribution. Submissions without a COI declaration will not be reviewed. Undisclosed conflicts discovered after publication will result in a correction notice and may result in retraction.</p>
          </section>

          <section style={{ marginBottom: 48, paddingBottom: 48, borderBottom: '1px solid #e2ddd5' }}>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 24, color: '#1A1A2E', marginBottom: 20 }}>Authorship and editorial control</h2>
            <p style={{ color: '#3d3d3a', fontSize: 16, lineHeight: 1.75, marginBottom: 14 }}>Named authorship with full credentials appears on all accepted contributions. Contributors retain the right to share links to their published work and to cite the piece in professional contexts.</p>
            <p style={{ color: '#3d3d3a', fontSize: 16, lineHeight: 1.75, marginBottom: 14 }}>Evidentia retains editorial control of the published version. Substantive changes will always be discussed with the author before publication. Authors may request corrections by contacting contact@evidentianutrition.org.</p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 24, color: '#1A1A2E', marginBottom: 8 }}>Contributor checklist</h2>
            <p style={{ color: '#3d3d3a', fontSize: 15, lineHeight: 1.7, marginBottom: 24, fontStyle: 'italic' }}>Complete this checklist and include it with your draft. Drafts submitted without it will be returned unreviewed.</p>

            {[
              'Every reference has been verified against the primary source, with DOI confirmed as resolving correctly and claim-to-source match confirmed.',
              'Mechanism, biomarker change, and clinical outcome are consistently distinguished throughout. Mechanistic evidence is used only to explain a proposed pathway, not to support a clinical conclusion.',
              'Evidence ratings meet the operational thresholds defined above. Where a downgrade factor applies, it has either been applied or explicitly argued against in the IN DEPTH section.',
              'Effect sizes are reported with units and confidence intervals wherever available in the source literature. Where unavailable, the absence is stated directly.',
              'Industry-funded trials are flagged by funder name, and the directional consequence of that funding is acknowledged.',
              'Deficiency and replete populations are distinguished where relevant.',
              'Female life stages are addressed where relevant evidence exists.',
              'Subgroup findings are flagged as hypothesis-generating with elevated false-positive risk where they were not prespecified primary endpoints.',
              'No bullet points or numbered lists appear in the body text.',
              'A conflict of interest declaration is included with the submission.',
              'The draft has been read for overstatement. Any claim that goes beyond what the directly cited evidence supports has been identified and either corrected or explicitly hedged.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, marginBottom: 14, backgroundColor: '#ffffff', border: '1px solid #e2ddd5', borderRadius: 6, padding: '14px 16px' }}>
                <div style={{ flexShrink: 0, width: 20, height: 20, border: '1.5px solid #0d7377', borderRadius: 4, marginTop: 1 }}></div>
                <p style={{ fontSize: 15, color: '#3d3d3a', margin: 0, lineHeight: 1.65 }}>{item}</p>
              </div>
            ))}
          </section>

          <div style={{ backgroundColor: '#e8f4f4', borderRadius: 8, padding: '20px 20px', marginTop: 16 }}>
            <p style={{ fontSize: 14, color: '#3d3d3a', margin: 0 }}>Questions about the submission process or editorial standards should be directed to <a href="mailto:contact@evidentianutrition.org" style={{ color: '#1A6B72' }}>contact@evidentianutrition.org</a>. To submit a proposal, visit the <Link href="/contribute" style={{ color: '#1A6B72' }}>contribute page</Link>.</p>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}