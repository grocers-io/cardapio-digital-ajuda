import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: {
    default: 'Central de Ajuda — Menuh',
    template: '%s — Menuh Ajuda',
  },
  description:
    'Central de ajuda do Menuh: cardápio digital, pedidos, loja, planos e integrações.',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ajuda.menuh.io'
  ),
}

const navbar = (
  <Navbar
    logo={
      <span style={{ fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>
        Menuh · Ajuda
      </span>
    }
    projectLink="https://www.menuh.io"
    projectIcon={
      <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>← Site</span>
    }
  />
)

const footer = (
  <Footer>
    <span>© {new Date().getFullYear()} Menuh (Grocers.io). Todos os direitos reservados.</span>
  </Footer>
)

export default async function RootLayout({ children }) {
  return (
    <html lang="pt-BR" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          footer={footer}
          docsRepositoryBase="https://github.com/grocers-io/cardapio-digital-ajuda/tree/main/content"
          editLink="Editar esta página"
          feedback={{ content: 'Dúvidas ou sugestões?' }}
          toc={{ title: 'Nesta página' }}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
