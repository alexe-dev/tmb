import Layout from '../components/Layout'
import {useState, useCallback} from 'react';


const tyrants = ['Nom', 'Mulmesh', 'Drellen', ' Gendricks', 'Goblin King', 'Marrow' ,'Duster', 'Barnacle', 'Kollossum', 'Goblin Queen', 'Vol`Kesh', 'Abomination', 'Nobulous', 'Deb', 'Sam' ,'Pat', 'Katherine Sunshine-Jackson', 'Amanight', 'Blobulous', 'Leech', 'Oxide', 'Locgear', 'Proto Tyrant'];
const getTyrant = () => tyrants[Math.floor(Math.random() * tyrants.length)]


const Tyrants = () => {
   
  const [tyrant, setTyrant] = useState(getTyrant());
  const handleClick = useCallback(() => {setTyrant(getTyrant())}, [])
    
 return  <>

    <Layout
      title="Too many bones tyrant randomizer"
      description="Too many bones unofficial tyrant randomizer"
    >
      <img
              src="/static/images/header.png"
              alt="gearlocs"
            />
        <h1 className="title">🦴 TMB Tyrant randomizer 🦴</h1>
        <section className="hero">
        
          <a href="/">
            <h3>Go to toolkit list</h3>
          </a>
          <a href="#" onClick={handleClick}>
            <h3>Randomize again</h3>
          </a>
        </section>
        <section>
            <h1 className="tyrant"> Your next target is: {tyrant} </h1>
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

export default Tyrants
