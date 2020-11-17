import Layout from '../components/Layout'

export const config = { amp: true }

const Home = (props) => (
  <>
    <Layout
      title="Too many bones unofficial toolkit app"
      description="Too many bones unofficial web companion app"
    >
      
        <h1 className="title">🦴 TMB toolkit 🦴</h1>
        <section className="hero">
        
          <a href="/">
            <h3>Tyrant randomizer</h3>
          </a>
          <a href="/">
            <h3>Encounter challenges</h3>
          </a>
          <a href="/">
            <h3>Blog 🦴 News</h3>
          </a>
          <a href="/">
            <h3>Useful links</h3>
          </a>
          <a href="/">
            <h3>Buyer's guide</h3>
          </a>
          <a href="/">
            <h3>About</h3>
          </a>
        </section>
        <amp-img
              src="/static/images/header.png"
              layout="responsive"
              alt="gearlocs"
              width="840"
              height="243"
            />
      
    </Layout>
    <style jsx>{`
     
      .title {
        text-align: center;
        padding-top: 2rem;
      }
      .hero {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-gap: 1rem;
      }
      .hero > a {
        display: block;
        padding: 0.5rem;
        text-align: center;
        text-decoration: none;
        background-color: #364016;

      }
      .hero h3 {
        margin: 0;
        color: #067df7;
        color: #fff;
      }
      .hero p {
        margin: 0;
        color: #fff;
      }
    `}</style>
  </>
)

// amp-script requires absolute URLs, so we create a property `host` which we can use to calculate the script URL.
export async function getServerSideProps({ req }) {
  return { props: { host: `https://${req.headers.host}` } }
}



export default Home
