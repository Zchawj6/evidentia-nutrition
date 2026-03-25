import '../styles/globals.css'

export const metadata = {
  title: { default: 'Evidentia Nutrition', template: '%s | Evidentia Nutrition' },
  description: 'Independent, evidence-rated reviews of nutritional ingredients and interventions.',
  metadataBase: new URL('https://evidentianutrition.org'),
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
