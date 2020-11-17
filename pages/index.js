import Layout from '../components/Layout'

const Home = () => (
  <>
    <Layout
      title="Too many bones unofficial toolkit app"
      description="Too many bones unofficial web companion app"
    >
      <img
              src="/static/images/header.png"
              alt="gearlocs"
              width="100%"
            />
        <h1 className="title">🦴 TMB toolkit 🦴</h1>
        <section className="hero">
        
          <a href="/tyrants">
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
        
      
    </Layout>
    <style jsx>{`
     
      .title {
        text-align: center;
        padding-top: 0rem;
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

export default Home
