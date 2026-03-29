import { notFound } from 'next/navigation'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import Link from 'next/link'

const categoryColors = {
  'Personalisation': { bg: '#E8F4F5', color: '#1A6B72' },
  'Clinical perspective': { bg: '#EEF2FF', color: '#4338CA' },
  "Women's health": { bg: '#FDF2F8', color: '#9D174D' },
  'Gut health': { bg: '#F0FDF4', color: '#166534' },
  'Performance': { bg: '#FFF7ED', color: '#9A3412' },
  'Supplementation': { bg: '#F5F3FF', color: '#6D28D9' },
}

const ARTICLES = {
  'why-one-dose-fits-nobody': {
    slug: 'why-one-dose-fits-nobody',
    title: 'Why one dose fits nobody: the case for personalised supplementation',
    date: '2026-03-01',
    category: 'Personalisation',
    author: 'Evidentia Nutrition',
    authorCredentials: '',
    excerpt: 'Population-level recommended intakes are designed to cover the majority at a single dose. They do not account for the individual variation in absorption, baseline status, genetics, and lifestyle that determines what any given person actually needs. This is not a minor caveat. It is a fundamental limitation of generic supplementation advice.',
    content: `
<h2>The problem with population averages</h2>
<p>Recommended daily intakes for vitamins and minerals are calculated to meet the needs of the majority of a healthy population. In statistical terms, they are typically set at two standard deviations above the average requirement, meaning they are designed to cover around 97.5 per cent of people. That sounds comprehensive. In practice, it means that for any given nutrient, some people need substantially less than the recommendation and some people need substantially more. The recommendation tells you nothing about which group you are in.</p>
<p>This matters because supplementation based on population averages is not personalised in any meaningful sense. It is a best guess for the average person, applied to an individual who may be significantly above or below average in their need for that nutrient. In some cases this variation is modest and the standard dose will serve most people adequately. In others, particularly where baseline deficiency, malabsorption, or medication interactions are present, the difference between the average dose and the right dose can be clinically meaningful.</p>

<h2>The factors that create individual variation</h2>
<p>Several well-evidenced factors determine how much of any given nutrient a person actually needs and how well they absorb and use what they take.</p>
<p><strong>Baseline nutritional status</strong> is the most direct determinant. A person who is deficient in vitamin D needs supplementation urgently and will respond substantially to it. A person who is already replete may need little or none, and the marginal benefit of supplementation diminishes sharply as status improves. Heaney et al. (2003) demonstrated that the serum response to a given dose of vitamin D3 varies significantly with baseline 25(OH)D concentration, with deficient individuals showing far greater increments per unit of supplementation than those who are already sufficient. The same principle applies to iron, where absorption is tightly regulated by body stores: Stoffel et al. (2017) showed that iron absorption from supplements is substantially higher in iron-depleted individuals than in those with adequate stores, meaning the same dose delivers very different amounts of usable iron depending on where you start.</p>
<p><strong>Genetic variation</strong> can influence nutrient metabolism, though its routine use in guiding supplementation remains an area of active development rather than settled clinical practice. Its importance lies less in current widespread application and more in demonstrating that nutrient requirements are not biologically uniform. The clearest established example is MTHFR polymorphisms and folate metabolism: individuals with the C677T variant have reduced ability to convert folic acid to its active form, 5-methyltetrahydrofolate, which has clinically recognised implications for form choice in supplementation and in pregnancy. VDR polymorphisms show associations with differential vitamin D response, though the dosing implications remain under investigation.</p>
<p><strong>Body composition and weight</strong> affect the distribution of fat-soluble vitamins. Vitamin D is sequestered in adipose tissue, meaning individuals with higher body fat may have lower circulating 25(OH)D despite equivalent sun exposure or supplementation.</p>
<p><strong>Dietary patterns</strong> determine baseline intake from food. A person eating oily fish three times a week has a very different baseline omega-3 status than a vegan eating no fish. A person with a varied whole-food diet rich in nuts, seeds, and legumes is far less likely to be magnesium-insufficient than someone eating a heavily processed diet.</p>
<p><strong>Medication interactions</strong> are frequently overlooked and potentially significant. Proton pump inhibitors reduce magnesium absorption and can cause clinically significant depletion with prolonged use. Metformin impairs vitamin B12 absorption: de Jager et al. (2010) found that metformin use was associated with a significant reduction in B12 levels over time, with the effect being dose-dependent. Statins reduce endogenous CoQ10 synthesis. Thiazide diuretics increase urinary magnesium excretion.</p>
<p><strong>Life stage and physiological state</strong> create further variation. Pregnancy dramatically increases requirements for folate, iodine, and iron. The perimenopause and menopause alter calcium and vitamin D requirements. Older age reduces intrinsic factor production and therefore B12 absorption from food. Athletes with high training loads have greater magnesium and iron turnover than sedentary individuals of the same age and sex.</p>

<h2>From variation to decision</h2>
<p>Recognising that this variation exists is only the first step. The practical challenge is translating it into decisions: what to take, at what dose, and in what form. Without a structured approach, personalisation risks becoming another vague concept rather than a useful clinical tool.</p>
<p>The minimum useful step for most people is baseline assessment: blood testing for the nutrients most likely to be deficient in their population and life stage, combined with a review of dietary patterns, medications, and relevant health history. For a UK adult this would typically include serum 25-hydroxyvitamin D, ferritin, serum B12, and a full blood count as a starting point, with additional markers depending on individual circumstances.</p>
<p>Beyond testing, understanding which forms of key nutrients are better absorbed and better tolerated, which medications are affecting nutrient status, and how dietary patterns influence baseline, makes supplementation substantially more rational than taking a standard dose of a standard formulation chosen from a shelf.</p>

<h2>What can reasonably be concluded</h2>
<p>A supplement taken at a standard dose without knowledge of an individual's baseline status, dietary patterns, medications, or life stage may be perfectly adequate. But it may also be suboptimal, unnecessary, or occasionally inappropriate. There is no particular basis for assuming it is right for any given person.</p>
<p>The case for personalised supplementation is not that every individual requires a complex protocol. It is that meaningful variation exists and should be accounted for where it is known to matter. The evidence is strongest for baseline status, dietary intake, medication use, and life stage. More advanced forms of personalisation, integrating genetic data and other individual markers into structured dosing decisions, are still evolving. But the direction of travel is clear: supplementation is more effective, safer, and more efficient when it is calibrated to the individual rather than the population average.</p>

<h2>Key references</h2>
<p>de Jager J et al. (2010). Long term treatment with metformin in patients with type 2 diabetes and risk of vitamin B-12 deficiency: randomised placebo controlled trial. <em>BMJ</em>, 340, c2181.</p>
<p>Heaney RP et al. (2003). Human serum 25-hydroxycholecalciferol response to extended oral dosing with cholecalciferol. <em>American Journal of Clinical Nutrition</em>, 77(1), 204–210.</p>
<p>Stoffel NU et al. (2017). Iron absorption from oral iron supplements given on consecutive versus alternate days. <em>Lancet Haematology</em>, 4(11), e524–e533.</p>
    `,
  },
}

export async function generateStaticParams() {
  return Object.keys(ARTICLES).map(slug => ({ slug }))
}

export async function generateMetadata({ params }) {
  const article = ARTICLES[params.slug]
  if (!article) return {}
  return { title: article.title, description: article.excerpt }
}

export default function ArticlePage({ params }) {
  const article = ARTICLES[params.slug]
  if (!article) notFound()

  const catStyle = categoryColors[article.category] || { bg: '#F3F4F6', color: '#374151' }
  const isGuest = article.author && article.author !== 'Evidentia Nutrition'
  const initials = isGuest ? article.author.split(' ').map(n => n[0]).join('').slice(0,2) : 'EN'

  return (
    <>
      <Nav />
      <main style={{ maxWidth: 820, margin: '0 auto', padding: '24px 24px 64px' }}>

        <div style={{ fontSize: 13, color: '#888', marginBottom: 20 }}>
          <Link href="/articles" style={{ color: '#1A6B72', textDecoration: 'none' }}>Articles</Link>
          {' / '}
          <span style={{ color: '#1A1A2E' }}>{article.title}</span>
        </div>

        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <span style={{ background: catStyle.bg, color: catStyle.color, fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.6px', padding: '3px 9px', borderRadius: 20 }}>
              {article.category}
            </span>
            <span style={{ fontSize: 13, color: '#aaa' }}>
              {new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </div>

          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 28, color: '#1A1A2E', lineHeight: 1.25, marginBottom: 16 }}>
            {article.title}
          </h1>

          <p style={{ fontSize: 16, color: '#4A4A6A', lineHeight: 1.7, marginBottom: 20, fontStyle: 'italic' }}>
            {article.excerpt}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 16, borderTop: '1px solid #E2E8E8' }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#E8F4F5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 600, color: '#1A6B72', flexShrink: 0 }}>
              {initials}
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 500, color: '#1A1A2E' }}>
                {isGuest ? article.author : 'Evidentia Nutrition'}
              </div>
              {article.authorCredentials && (
                <div style={{ fontSize: 12, color: '#888' }}>{article.authorCredentials}</div>
              )}
            </div>
          </div>
        </div>

        <div style={{ background: '#F7FAFA', border: '1px solid #E2E8E8', borderLeft: '3px solid #E8A020', borderRadius: '0 8px 8px 0', padding: '12px 16px', marginBottom: 28, fontSize: 13, color: '#6B5500', lineHeight: 1.6 }}>
          This article represents {isGuest ? `the views of ${article.author}` : 'expert commentary'} and is subject to our editorial standards. It is not a structured evidence appraisal. For evidence ratings on specific ingredients, see our <Link href="/library" style={{ color: '#1A6B72', textDecoration: 'none' }}>evidence library</Link>.
        </div>

        <div style={{ background: '#fff', border: '1px solid #E2E8E8', borderRadius: 10, padding: '28px 32px' }}>
          <div
            dangerouslySetInnerHTML={{ __html: article.content }}
            className="prose"
            style={{ fontSize: 16, color: '#4A4A6A', lineHeight: 1.8 }}
          />
        </div>

        <div style={{ marginTop: 32, textAlign: 'center' }}>
          <Link href="/articles" style={{ fontSize: 13, color: '#1A6B72', textDecoration: 'none' }}>
            ← Back to all articles
          </Link>
        </div>

      </main>
      <Footer />
    </>
  )
}

