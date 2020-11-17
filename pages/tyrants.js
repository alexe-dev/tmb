import Layout from '../components/Layout'
import {useState, useCallback, useEffect} from 'react';


const tyrants = [{set: 'base', name: 'Nom'}, {set:'base', name: 'Mulmesh'}, {set:'base', name: 'Drellen'},
{set:'base', name: 'Gendricks'}, {set:'base', name: 'Goblin King'}, {set:'base', name: 'Marrow'} ,{set:'base', name: 'Duster'},
{set:'undertow', name: 'Barnacle'},{set:'Undertow', name: 'Kollossum'}, {set:'undertow', name:'Goblin Queen'},{set:'undertow', name: 'Vol`Kesh'},
{set:'undertow', name: 'Abomination'},
{set:'undertow', name:'Nobulous'}, {set:'april', name:'Deb'}, {set:'april', name:'Sam'} ,{set:'april', name:'Pat'}, {set:'april', name:'Katherine Sunshine-Jackson'}, {set:'splice', name:'Amanight'},
{set:'splice', name:'Blobulous'}, {set:'splice', name:'Leech'}, {set:'splice', name:'Oxide'}, {set:'splice', name:'Locgear'},{set:'splice', name:'Build-A-Tyrant'}, {set:'splice', name:'Proto Tyrant'}];

const initSets = {base:true, undertow:true, splice:true, april:true}

const getTyrant = (sets) => {const filteredTyrants = tyrants.filter(t => sets[t.set]); return filteredTyrants.length ? filteredTyrants[Math.floor(Math.random() * filteredTyrants.length)] : {name:'nobody'}}


const Tyrants = () => {
  const [sets, setSets] = useState(initSets)
  const [tyrant, setTyrant] = useState(getTyrant(initSets));
  const handleClick = useCallback(() => {setTyrant(getTyrant(sets))}, [sets]);
  const handleCheckbox = useCallback((e) => {
    const target = e.target;
    const value = target.checked;
    const name = target.name;
    const newSets = {...sets, [name]:value}
  
    setSets(newSets)
    if(!newSets[tyrant.set])  {setTyrant(getTyrant(newSets))}
  }, [sets])

    
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
        <section className="form">
        <form>
        <label>
          Base set
          <input
            name="base"
            type="checkbox"
            checked={sets.base}
            onChange={handleCheckbox} />
        </label>
        
        <label>
          Undertow
          <input
            name="undertow"
            type="checkbox"
            checked={sets.undertow}
            onChange={handleCheckbox} />
        </label>
        
        <label>
          Splice &amp; Dice
          <input
            name="splice"
            type="checkbox"
            checked={sets.splice}
            onChange={handleCheckbox} />
        </label>
        
        <label>
          April fools promo
          <input
            name="april"
            type="checkbox"
            checked={sets.april}
            onChange={handleCheckbox} />
        </label>
        </form>
        </section>
        <section>
            <h3 className="tyrant"> Your next target is: {tyrant.name} </h3>
        </section>
        
        
        
      
    </Layout>
    <style jsx>{`
      .form {
        margin: 0 auto;
        text-align:center;
      }
      input[type=checkbox]{
        margin-right: 20px;
      }
      .title {
        text-align: center;
        padding-top: 2rem;
      }
      .tyrant {
          font-size: 3rem;
          text-align:center;
          margin:0;
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
