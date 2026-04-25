import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Contribute | Evidentia Nutrition',
  description: 'Submit a proposal to contribute an evidence-based article or library entry to Evidentia Nutrition.',
}

export default function ContributePage() {
  return (
    <>
      <Nav />
      <main style={{ backgroundColor: '#faf8f4', minHeight: '100vh' }}>

        {/* Hero */}
        <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2ddd5', padding: '72px 24px 56px', textAlign: 'center' }}>
          <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0d7377', backgroundColor: '#e8f4f4', padding: '4px 14px', borderRadius: 20, marginBottom: 20 }}>Contribute</span>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 42, color: '#1A1A2E', lineHeight: 1.2, marginBottom: 20, maxWidth: 600, margin: '0 auto 20px' }}>Write for Evidentia</h1>
          <p style={{ fontSize: 17, color: '#3d3d3a', maxWidth: 520, margin: '0 auto 36px', lineHeight: 1.75, fontWeight: 300 }}>We publish evidence-based reviews and clinical commentary for people who want to understand what the science actually says about supplements and nutrition.</p>
          <a href="mailto:contact@evidentianutrition.org" style={{ display: 'inline-block', backgroundColor: '#0d7377', color: '#ffffff', padding: '13px 32px', borderRadius: 4, fontSize: 15, fontWeight: 500, textDecoration: 'none' }}>Submit a proposal</a>
        </div>

        <div style={{ maxWidth: 780, margin: '0 auto', padding: '0 24px' }}>

          {/* What we stand for */}
          <section style={{ padding: '56px 0', borderBottom: '1px solid #e2ddd5' }}>
            <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0d7377', display: 'block', marginBottom: 8 }}>Our standard</span>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 28, color: '#1A1A2E', marginBottom: 20, lineHeight: 1.25 }}>What we stand for</h2>
            <p style={{ color: '#3d3d3a', marginBottom: 14, fontSize: 16 }}>Evidentia exists because most supplement content online is marketing dressed as science. Our library and article archive are built on one principle: say only what the evidence supports, and be explicit about what it does not.</p>
            <p style={{ color: '#3d3d3a', marginBottom: 14, fontSize: 16 }}>We are not looking for content that promotes supplements, validates health trends, or reaches optimistic conclusions beyond the data. We are looking for writers who are comfortable saying "the evidence does not support this claim" and who understand why that matters.</p>
            <p style={{ color: '#3d3d3a', marginBottom: 32, fontSize: 16 }}>Contributions go through editorial review and, where appropriate, independent peer review before publication. Acceptance is not guaranteed. We will always tell you why a submission is not a fit.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
              {[
                { title: 'Evidence first', body: 'Conclusions must follow from the evidence, not precede it. Mechanism is not outcome.' },
                { title: 'Calibrated uncertainty', body: 'We distinguish between strong evidence, limited evidence, and no evidence. Overstatement is an error.' },
                { title: 'Transparent conflicts', body: 'All financial interests and advisory relationships must be declared. Editorial control remains with Evidentia.' },
                { title: 'Clinical literacy', body: 'We expect contributors to understand the difference between biomarker change and clinical benefit.' },
              ].map(card => (
                <div key={card.title} style={{ backgroundColor: '#ffffff', border: '1px solid #e2ddd5', borderRadius: 8, padding: '20px 18px' }}>
                  <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 16, color: '#1A1A2E', marginBottom: 8 }}>{card.title}</h3>
                  <p style={{ fontSize: 14, color: '#6b6b66', margin: 0 }}>{card.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What we publish */}
          <section style={{ padding: '56px 0', borderBottom: '1px solid #e2ddd5' }}>
            <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0d7377', display: 'block', marginBottom: 8 }}>Formats</span>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 28, color: '#1A1A2E', marginBottom: 20, lineHeight: 1.25 }}>What we publish</h2>
            <p style={{ color: '#3d3d3a', marginBottom: 24, fontSize: 16 }}>Evidentia has two distinct content formats. Proposals should specify which format you are submitting for, as the editorial requirements differ.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2ddd5', borderRadius: 8, padding: '20px', display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                <span style={{ flexShrink: 0, fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 20, backgroundColor: '#e8f4f4', color: '#0d7377', marginTop: 2 }}>Library entry</span>
                <div>
                  <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 16, color: '#1A1A2E', marginBottom: 6 }}>Evidence library entries</h3>
                  <p style={{ fontSize: 14, color: '#6b6b66', margin: 0 }}>Structured evidence reviews covering a single supplement, ingredient, or strain. Entries follow a fixed format covering biological role, evidence summary, five standardised clinical questions, individual variation, safety, and an in-depth trial analysis section. Typically 2,500 to 4,000 words. The format is fixed and cannot be modified by contributors.</p>
                </div>
              </div>
              <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2ddd5', borderRadius: 8, padding: '20px', display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                <span style={{ flexShrink: 0, fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 20, backgroundColor: '#fdf3e7', color: '#c97b2a', marginTop: 2 }}>Article</span>
                <div>
                  <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 16, color: '#1A1A2E', marginBottom: 6 }}>Long-form evidence articles</h3>
                  <p style={{ fontSize: 14, color: '#6b6b66', margin: 0 }}>Analytical pieces that cut across multiple ingredients, examine a clinical question, or address a specific population. These follow no fixed template but must be written in full prose, with claims supported by named references, and a key references section at the end. Typically 1,500 to 3,000 words.</p>
                </div>
              </div>
            </div>
          </section>

          {/* How submission works */}
          <section style={{ padding: '56px 0', borderBottom: '1px solid #e2ddd5' }}>
            <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0d7377', display: 'block', marginBottom: 8 }}>Process</span>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 28, color: '#1A1A2E', marginBottom: 20, lineHeight: 1.25 }}>How submission works</h2>
            <p style={{ color: '#3d3d3a', marginBottom: 32, fontSize: 16 }}>We ask for a proposal before a full draft. This saves time for everyone and lets us flag editorial concerns or scope overlaps early.</p>

            {[
              { num: 1, title: 'Send a proposal', body: 'Email a short proposal to contact@evidentianutrition.org. Include the topic, format, your background, and a brief outline of your argument or the gap you are addressing. Three to four sentences is sufficient. We do not need a full draft at this stage.' },
              { num: 2, title: 'Editorial review', body: 'We will respond within two weeks. If the proposal fits the Evidentia standard and does not overlap with existing content, we will invite a full draft and share the relevant style and format guide.' },
              { num: 3, title: 'Draft submission', body: 'Submit your draft in plain text or markdown. All references must be real, verified against the primary source, and cited in Harvard format with DOIs. We do not accept submissions that rely on secondary sources as primary evidence. Outcome claims must include quantitative effect sizes with units and confidence intervals where these are available in the source literature. Evidence ratings must follow the operational thresholds and downgrade framework set out in the editorial standards; they are not interpretive judgements. Include the completed contributor checklist from the editorial standards document with your submission. Drafts submitted without it will be returned unreviewed.' },
              { num: 4, title: 'Peer and editorial review', body: 'Submissions undergo editorial review for accuracy, calibration, and tone. Specialist submissions may be sent for independent peer review. We will return specific feedback. Revisions are collaborative, not adversarial.' },
              { num: 5, title: 'Publication and attribution', body: 'Published contributions carry full named author attribution with credentials. Authors retain the right to share links to their published work. Evidentia retains editorial control of the published version, including the right to make minor factual or style corrections after publication.' },
            ].map((step, i, arr) => (
              <div key={step.num} style={{ display: 'flex', gap: 20, marginBottom: i < arr.length - 1 ? 0 : 0 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: 36 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', backgroundColor: '#0d7377', color: '#ffffff', fontSize: 13, fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{step.num}</div>
                  {i < arr.length - 1 && <div style={{ flex: 1, width: 1, backgroundColor: '#e2ddd5', margin: '4px 0' }}></div>}
                </div>
                <div style={{ paddingBottom: i < arr.length - 1 ? 28 : 0, paddingTop: 6 }}>
                  <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 16, color: '#1A1A2E', marginBottom: 6 }}>{step.title}</h3>
                  <p style={{ fontSize: 14, color: '#6b6b66', margin: 0 }}>{step.body}</p>
                </div>
              </div>
            ))}

            {/* COI box */}
            <div style={{ backgroundColor: '#fdf3e7', border: '1px solid #f0d5b0', borderRadius: 8, padding: '20px 20px', marginTop: 28, display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c97b2a" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <p style={{ fontSize: 14, color: '#3d3d3a', margin: 0 }}><strong style={{ fontWeight: 500, color: '#1A1A2E' }}>Conflict of interest declaration.</strong> All contributors must declare any financial relationships with supplement manufacturers, advisory roles, speaker fees, or research funding from industry sources relevant to the submission topic. Declarations are published alongside the article. Submissions that do not include a COI declaration will not be reviewed.</p>
            </div>
          </section>

          {/* What we do not publish */}
          <section style={{ padding: '56px 0', borderBottom: '1px solid #e2ddd5' }}>
            <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0d7377', display: 'block', marginBottom: 8 }}>Out of scope</span>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 28, color: '#1A1A2E', marginBottom: 16, lineHeight: 1.25 }}>What we do not publish</h2>
            <p style={{ color: '#3d3d3a', marginBottom: 24, fontSize: 16 }}>Being clear about this upfront protects your time and ours.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
              {[
                { title: 'Product promotion', body: 'Submissions that recommend specific branded products or are commercially motivated in any direction.' },
                { title: 'Duplicate coverage', body: 'Topics already covered in the library or article archive unless you are substantially extending or contradicting the existing entry.' },
                { title: 'Mechanism as evidence', body: 'Submissions that present preclinical or mechanistic data as though it directly supports clinical benefit.' },
                { title: 'Unverified references', body: 'Any submission where citations have not been checked against the primary source before submission.' },
                { title: 'Opinion without evidence', body: 'Commentary pieces that argue for a position without engaging with the trial evidence for or against it.' },
                { title: 'Press releases as science', body: 'Submissions based on preprints, unpublished data, or company-issued study summaries as primary support.' },
                { title: 'Uncalibrated evidence ratings', body: 'Submissions that assign evidence ratings without applying the required thresholds, downgrade rules, or risk-of-bias framework set out in the editorial standards.' },
              ].map(item => (
                <div key={item.title} style={{ backgroundColor: '#ffffff', border: '1px solid #e2ddd5', borderLeft: '3px solid #b5342a', borderRadius: '0 6px 6px 0', padding: '14px 16px' }}>
                  <h4 style={{ fontSize: 14, fontWeight: 500, color: '#1A1A2E', marginBottom: 4 }}>{item.title}</h4>
                  <p style={{ fontSize: 13, color: '#6b6b66', margin: 0 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Who we are looking for */}
          <section id="contact" style={{ padding: '56px 0' }}>
            <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0d7377', display: 'block', marginBottom: 8 }}>Get in touch</span>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 28, color: '#1A1A2E', marginBottom: 20, lineHeight: 1.25 }}>Who we are looking for</h2>
            <p style={{ color: '#3d3d3a', marginBottom: 14, fontSize: 16 }}>We are particularly interested in contributions from clinicians, registered dietitians, pharmacists, and researchers with direct experience of the clinical question they are writing about. Academic or clinical affiliation is not a requirement, but you should be able to demonstrate familiarity with the evidence base.</p>
            <p style={{ color: '#3d3d3a', marginBottom: 14, fontSize: 16 }}>If you are unsure whether your background or topic is a fit, send us a brief note. We would rather have the conversation than have you spend time on a draft that is not right for the platform.</p>
            <p style={{ color: '#3d3d3a', fontSize: 16 }}>For full details on evidence rating thresholds, downgrade rules, effect-size requirements, and the contributor checklist, see the <a href="/articles/editorial-standards-for-contributors" style={{ color: '#1A6B72', textDecoration: 'underline', textUnderlineOffset: 3 }}>editorial standards document</a>. We recommend reading it before drafting.</p>
          </section>

        </div>

        {/* CTA block */}
        <div style={{ maxWidth: 780, margin: '0 auto', padding: '0 24px 72px' }}>
          <div style={{ backgroundColor: '#0d7377', borderRadius: 12, padding: '48px 40px', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 28, color: '#ffffff', marginBottom: 12 }}>Ready to propose a topic?</h2>
            <p style={{ color: 'rgba(255,255,255,0.82)', maxWidth: 380, margin: '0 auto 28px', fontSize: 15 }}>Send a short proposal and we will come back to you within two weeks.</p>
            <a href="mailto:contact@evidentianutrition.org" style={{ display: 'inline-block', backgroundColor: '#ffffff', color: '#0d7377', padding: '13px 28px', borderRadius: 4, fontWeight: 500, fontSize: 15, textDecoration: 'none' }}>contact@evidentianutrition.org</a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
