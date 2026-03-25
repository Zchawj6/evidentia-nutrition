import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata = { title: 'About', description: 'About Evidentia Nutrition: our mission, governance, and conflict of interest framework.' }

export default function About() {
  return (
    <>
      <Nav />
      <main style={{ maxWidth: 820, margin: '0 auto', padding: '40px 24px 64px' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: '#1A6B72', marginBottom: 12 }}>Who we are</div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 30, color: '#1A1A2E', marginBottom: 14 }}>About Evidentia Nutrition</h1>
        </div>

        {/* Mission */}
        <div style={{ background: '#fff', border: '1px solid #E2E8E8', borderRadius: 10, padding: '24px 28px', marginBottom: 14 }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 18, color: '#1A1A2E', marginBottom: 12 }}>Mission</h2>
          <p style={{ fontSize: 15, color: '#4A4A6A', lineHeight: 1.7, marginBottom: 10 }}>
            Evidentia Nutrition exists to make high-quality nutritional evidence genuinely accessible. Not simplified to the point of distortion, and not buried in academic language that excludes most of the people who need it most.
          </p>
          <p style={{ fontSize: 15, color: '#4A4A6A', lineHeight: 1.7, marginBottom: 0 }}>
            The field of nutrition is one of the most contested and commercially compromised areas of public health communication. Claims proliferate, conflicts of interest are rarely declared, and the gap between what the evidence actually shows and what reaches the public is wide. We exist to close that gap.
          </p>
        </div>

        {/* Founding director */}
        <div style={{ background: '#fff', border: '1px solid #E2E8E8', borderRadius: 10, padding: '24px 28px', marginBottom: 14 }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 18, color: '#1A1A2E', marginBottom: 16 }}>Founding director</h2>
          <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#E8F4F5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: 'Georgia, serif', fontSize: 22, color: '#1A6B72', fontWeight: 700 }}>JJ</div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 600, color: '#1A1A2E', marginBottom: 2 }}>Dr Jatin Joshi</div>
              <div style={{ fontSize: 13, color: '#888', marginBottom: 10 }}>Surgeon, Professor · MSc Evidence-Based Healthcare, University of Oxford</div>
              <p style={{ fontSize: 14, color: '#4A4A6A', lineHeight: 1.65, marginBottom: 8 }}>
                Jatin is a surgeon and Professor at University College London with a Masters in Evidence-Based Healthcare from the University of Oxford. He has extensive experience in clinical medicine, evidence appraisal, and the supplement industry, having previously scaled a supplement brand to 25,000 retail doors.
              </p>
              <p style={{ fontSize: 14, color: '#4A4A6A', lineHeight: 1.65, marginBottom: 0 }}>
                He is also Chief Medical Officer and Co-Founder of Personally, a personalised supplement company. This relationship is disclosed in full in the conflict of interest section below.
              </p>
            </div>
          </div>
        </div>

        {/* Advisory board */}
        <div style={{ background: '#fff', border: '1px solid #E2E8E8', borderRadius: 10, padding: '24px 28px', marginBottom: 14 }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 18, color: '#1A1A2E', marginBottom: 12 }}>Advisory board</h2>
          <p style={{ fontSize: 14, color: '#4A4A6A', lineHeight: 1.65, marginBottom: 0 }}>
            An advisory board of two to four members is being constituted and will be listed here before public launch. The board includes a practising registered dietician or nutritionist, a clinical academic with relevant research expertise, and a lay member with public health or communications experience. Advisory board members review the methodology framework, oversee conflict of interest declarations, and provide input on contentious editorial calls.
          </p>
        </div>

        {/* COI */}
        <div id="conflicts" style={{ background: '#fff', border: '1px solid #E2E8E8', borderRadius: 10, padding: '24px 28px', marginBottom: 14 }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 18, color: '#1A1A2E', marginBottom: 12 }}>Conflict of interest</h2>
          <p style={{ fontSize: 14, color: '#4A4A6A', lineHeight: 1.65, marginBottom: 12 }}>
            Evidentia Nutrition operates in a field where perceived conflicts are as damaging as real ones. This section is written to be more transparent than is strictly required.
          </p>
          <div style={{ background: '#FFF8E8', borderLeft: '3px solid #E8A020', borderRadius: '0 6px 6px 0', padding: '12px 16px', marginBottom: 14 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#6B4800', marginBottom: 4 }}>Declared relationship: Personally</div>
            <p style={{ fontSize: 13, color: '#6B4800', lineHeight: 1.6, margin: 0 }}>
              The founding director holds the role of Chief Medical Officer at Personally (Supplement Technology Limited), a direct-to-consumer personalised supplement company. Evidentia Nutrition is legally and operationally independent of Personally. There is no commercial relationship between the two organisations and Evidentia content does not promote or reference Personally's products. Topics that directly overlap with Personally's commercial ingredient range are reviewed by an advisory board member before publication. This arrangement is reviewed annually.
            </p>
          </div>
          <p style={{ fontSize: 14, color: '#4A4A6A', lineHeight: 1.65, marginBottom: 0 }}>
            All advisory board members make annual conflict of interest declarations. Relevant declared interests are noted on the entries they relate to. Evidentia Nutrition does not accept commercial sponsorship, affiliate arrangements, or any funding arrangement that creates a conflict with its evidence appraisal role.
          </p>
        </div>

        {/* Funding */}
        <div style={{ background: '#fff', border: '1px solid #E2E8E8', borderRadius: 10, padding: '24px 28px', marginBottom: 14 }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 18, color: '#1A1A2E', marginBottom: 12 }}>Funding</h2>
          <p style={{ fontSize: 14, color: '#4A4A6A', lineHeight: 1.65, marginBottom: 0 }}>
            Evidentia Nutrition is currently founder-funded. There are no commercial sponsors, no affiliate relationships, and no advertising. We will update this section as the funding model develops. Any external funding that is accepted will be disclosed here in full, along with the terms under which it was accepted.
          </p>
        </div>

        {/* Non-profit intent */}
        <div style={{ background: '#E8F4F5', border: '1px solid #C5D8DA', borderRadius: 10, padding: '20px 24px' }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#0D4A50', marginBottom: 6 }}>Non-profit intent</div>
          <p style={{ fontSize: 13, color: '#1A6B72', lineHeight: 1.65, margin: 0 }}>
            Evidentia Nutrition is operated as an independent educational resource with a non-commercial mission. We are working towards a formal non-profit structure and will update this section when that process is complete.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
