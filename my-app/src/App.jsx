import {react, useState, useEffect} from 'react';
import Characters from "./components/characters";
import Filters from "./components/filters";
import './assets/css/main.css';


function App() {

  let [results, setResults] = useState([]);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");
  let api = `https://rickandmortyapi.com/api/character/?name=${search}&status=${status}&species=${species}&gender=${gender}`;

  useEffect(() => {
      (async () => {
          let response = await fetch (api);
          let data = await response.json();
          
          setResults(data.results);
          
      })();
  }, [api]); 

  return (
    <>

      <div className="body-container">
      
        <header>
          <h1>Rick & Morty <b>NFT</b></h1>

          <nav class="nav-bar"> {/* componente a extrair */}
            <a href="" target="_blank">Characters</a>
            <a href="" target="_blank">Episodes</a>
            <a href="" target="_blank">Locations</a>
          </nav>

        </header>

        <main>
          <h1 className="page-title">Characters</h1>

          <div className="main-content">

            <section className="main-column1">
              <Filters status={status} setStatus={setStatus} species={species} setSpecies={setSpecies} gender={gender} setGender={setGender}/>
            </section>
            
            <section className="main-column2">
              <Characters results={results} setSearch={setSearch} /> 

            </section>

          </div>
        
        </main>

      </div>

    </>
  );
}

export default App;
