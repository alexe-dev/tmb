import NextHead from 'next/head'

// Your app's theme color
const THEME_COLOR = '#364016'

const Layout = (props) => (
  <>
    <NextHead>
      <title>{props.title || ''}</title>
      <meta name="description" content={props.description || ''} />
      <meta name="theme-color" content={THEME_COLOR} />
      <link rel="icon" sizes="192x192" href="/static/images/icons-192.png" />
      <link rel="apple-touch-icon" href="/static/images/icons-192.png" />
      <link rel="icon" href="/static/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
    </NextHead>
    <main>
    {props.children}
    <footer>The information presented on this site about Too Many Bones, Too Many Bones: Undertow, both literal and graphical, copyrighted by <a href="https://chiptheorygames.com/">Chip Theory Games</a>. This website is not produced, endorsed, supported, or affilitated with <a href="https://chiptheorygames.com/">Chip Theory Games</a>.</footer>
    </main>
   

    <style jsx global>{`
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
        min-height: 100vh;
        scroll-behavior: smooth;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
      }
      main {
        margin: 0 auto;
        max-width: 800px;
      }
      main > * + * {
        margin: 2rem 0.5rem;
      }
      footer {
        font-size: 0.8rem;
        text-align: center;
      }
    `}</style>
  </>
)

export default Layout
