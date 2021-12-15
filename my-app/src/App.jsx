import {react, useState, useEffect} from 'react';
import Characters from "./components/characters";
import './assets/css/main.css';


function App() {

  let [results, setResults] = useState([]);
  let [search, setSearch] = useState("");
 /*  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState(""); */
  let api = `https://rickandmortyapi.com/api/character/?name=${search}`;

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
          <h1>Rick & Morty NFT</h1>

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
                <div className="filters">
                  <h2>Filters</h2>
                  <p>Clear Filters</p>
                </div>
                
                <article className="filter-box">{/* componente a extrair */}
                
                  <details>
                    <summary>Status</summary>
                    <input type="radio" id="alive" name="status" value="alive" />
                      <label for="alive">ALIVE</label>
                      <input type="radio" id="dead" name="status" value="dead" />
                      <label for="dead">DEAD</label>
                      <input type="radio" id="unknown" name="status" value="unknown" />
                      <label for="unknown">UNKNOWN</label>
                    {/*  <button className='Filter'>DEAD </button>
                      <button className='Filter'>UNKNOWN </button> */}
                    </details>

                  <details>
                    <summary>Species</summary>
                    <input type="radio" id="human" name="species" value="human" />
                      <label for="human">HUMAN</label>
                      <input type="radio" id="alien" name="species" value="alien" />
                      <label for="alien">ALIEN</label>
                      <input type="radio" id="mythological creature" name="species" value="mythological creature" />
                      <label for="mythological creature">MYTHOLOGICAL CREATURE</label>
                    {/*  <button className='Filter'>HUMAN </button>
                      <button className='Filter'>ALIEN </button>
                      <button className='Filter'>MYTHOLOGICAL CREATURE</button> */}
                  </details>

                  <details>
                    <summary>Gender</summary>
                    <input type="radio" id="male" name="gender" value="male" />
                      <label for="male">MALE</label>
                      <input type="radio" id="female" name="gender" value="female" />
                      <label for="female">FEMALE</label>
                      <input type="radio" id="unknown" name="gender" value="unknown" />
                      <label for="unknown">UNKNOWN</label>
                    {/*   <button className='Filter'>MALE </button>   
                      <button className='Filter'>FEMALE </button>
                      <button className='Filter'>UNKNOWN</button> */}
                  </details>

                </article>
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
