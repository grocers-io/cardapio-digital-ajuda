import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head, Search } from 'nextra/components'
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

/* CSS variables para troca de logo light/dark sem JS extra */
const brandStyle = `
  :root {
    --nextra-primary-hue: 0deg;
    --nextra-primary-saturation: 100%;
    --nextra-primary-lightness: 63%;
    --logo-light: block;
    --logo-dark: none;
  }
  .dark {
    --nextra-primary-hue: 0deg;
    --nextra-primary-saturation: 100%;
    --nextra-primary-lightness: 63%;
    --logo-light: none;
    --logo-dark: block;
  }
`

const MenuhLogo = () => (
  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
    {/* logo para tema claro */}
    <img
      src="/logo-light.svg"
      alt="Menuh"
      height="30"
      style={{ display: 'var(--logo-light)', verticalAlign: 'middle' }}
    />
    {/* logo para tema escuro */}
    <img
      src="/logo-dark.svg"
      alt="Menuh"
      height="30"
      style={{ display: 'var(--logo-dark)', verticalAlign: 'middle' }}
    />
    <span
      style={{
        fontSize: '0.75rem',
        fontWeight: 600,
        color: 'var(--nextra-colors-gray-600, #6b7280)',
        paddingLeft: '0.5rem',
        borderLeft: '1px solid currentColor',
        opacity: 0.6,
      }}
    >
      Ajuda
    </span>
  </span>
)

const navbar = (
  <Navbar
    logo={<MenuhLogo />}
    projectLink="https://www.menuh.io"
    projectIcon={
      <span style={{ fontSize: '0.72rem', fontWeight: 600, opacity: 0.7 }}>
        ← menuh.io
      </span>
    }
  />
)

const footer = (
  <Footer>
    <span style={{ fontSize: '0.85rem', opacity: 0.7 }}>
      © {new Date().getFullYear()}{' '}
      <a
        href="https://www.menuh.io"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#FF4444', textDecoration: 'none' }}
      >
        Menuh
      </a>{' '}
      · Grocers.io · Todos os direitos reservados.
    </span>
  </Footer>
)

export default async function RootLayout({ children }) {
  return (
    <html lang="pt-BR" dir="ltr" suppressHydrationWarning>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: brandStyle }} />
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          footer={footer}
          search={<Search placeholder="Buscar na documentação..." />}
          docsRepositoryBase="https://github.com/grocers-io/cardapio-digital-ajuda/tree/main/content"
          editLink="Editar esta página"
          feedback={{ content: 'Dúvidas ou sugestões?' }}
          toc={{ title: 'Nesta página', backToTop: 'Voltar ao topo' }}
          themeSwitch={{ dark: 'Escuro', light: 'Claro', system: 'Sistema' }}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          copyPageButton={false}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
