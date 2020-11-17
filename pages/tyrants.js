import Layout from '../components/Layout'
import AmpState from '../components/amp/AmpState'
import {useState, useCallback} from 'react';

export const config = { amp: true }

const tyrants = ['Nom', 'Mulmesh', 'Drellen', ' Gendricks', 'Goblin King', 'Marrow' ,'Duster', 'Barnacle', 'Kollossum', 'Goblin Queen', 'Vol`Kesh', 'Abomination', 'Nobulous', 'Deb', 'Sam' ,'Pat', 'Katherine Sunshine-Jackson', 'Amanight', 'Blobulous', 'Leech', 'Oxide', 'Locgear', 'Proto Tyrant'];
const tyrant = tyrants[Math.floor(Math.random() * tyrants.length)]

const Home = (props) => {
   

    
 return  <>
 <AmpState id="myState">
            {{
              tyrants,
            }}
          </AmpState>
    <Layout
      title="Too many bones tyrant randomizer"
      description="Too many bones unofficial tyrant randomizer"
    >
      <amp-img
              src="/static/images/header.png"
              layout="responsive"
              alt="gearlocs"
              width="840"
              height="243"
            />
        <h1 className="title">🦴 TMB Tyrant randomizer 🦴</h1>
        <section className="hero">
        
          <a href="/">
            <h3>Go to toolkit list</h3>
          </a>
          <a href="#" on="tap:AMP.setState({
           tyrant: myState.tyrants[floor(random() * myState.tyrants.length)]
         })">
            <h3>Randomize again</h3>
          </a>
          
          
          
        </section>
        <section>
            <h1 className="tyrant"> Your next target is: <span data-amp-bind-text="tyrant" >{tyrant}</span> </h1>
        </section>
        
      
    </Layout>
    <style jsx>{`
     
      .title {
        text-align: center;
        padding-top: 2rem;
      }
      .tyrant {
          font-size: 3rem;
          text-align:center;
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
}

// amp-script requires absolute URLs, so we create a property `host` which we can use to calculate the script URL.
export async function getServerSideProps({ req }) {
  return { props: { host: `https://${req.headers.host}` } }
}



export default Home
