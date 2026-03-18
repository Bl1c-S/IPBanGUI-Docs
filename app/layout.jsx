import { Layout, Navbar, Footer } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import config from '../theme.config.jsx'

export const metadata = {
  // Your metadata
}

export default async function RootLayout({ children }) {
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        {/* Your additional head elements */}
      </head>
      <body>
        <Layout
          navbar={<Navbar logo={config.logo} />}
          footer={<Footer>{config.footer?.text || 'Torgsoft IPBanGUI Docs'}</Footer>}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}