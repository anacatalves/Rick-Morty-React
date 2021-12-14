import react, { useState, useEffect } from 'react';
//import Characters from "./components/Characters";
import './assets/css/main.css';

function App() {
  let [results, setResults] = useState([]);

  let api = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    (async () => {
      let response = await fetch (api);
      let data = await response.json();
      
      setResults(data.results);

    })()
    
  }, [api])

  const [filterParam, setFilterParam] = useState(["All"]);
  /* fetch (api)
    .then ((response) => response.json())
    .then ((data) => setResults(data.results));
 */
  return (
    <>

      <div class="body">

        <header class="nav-bar">
          <h1>Rick & Morty Wiki</h1>

          <nav> {/* componente a extrair */}
            <a href="" target="_blank">Characters</a>
            <a href="" target="_blank">Episodes</a>
            <a href="" target="_blank">Locations</a>
          </nav>

        </header>

        <main class="container">

          <div class="main-column1">
            <h2>Filters</h2>
            <p>Clear Filters</p>
            {/* componente a extrair */}
            <article class="filter-box">
              <details>
                <summary>Status</summary>
                  <button className='Filter'>ALIVE </button>
                  <button className='Filter'>DEAD </button>
                  <button className='Filter'>UNKNOWN </button>
                </details>
              <details>
                <summary>Species</summary>
                  <button className='Filter'>HUMAN </button>
                  <button className='Filter'>ALIEN </button>
                  <button className='Filter'>MYTHOLOGICAL CREATURE</button>
              </details>
              <details>
                <summary>Gender</summary>
                  <button className='Filter'>MALE </button>   
                  <button className='Filter'>FEMALE </button>
                  <button className='Filter'>UNKNOWN</button>

              </details>
            </article>
          </div>

          {/* componente a extrair */}
          <div class="main-column2">
            <div class="search-bar">
              
            </div>
          </div>

          
            {results.map ((character) => (
                <>
                <div className='character_card'>
                    <div className='character_image'>
                        <img className='character_image' src={character.image} alt="Image" />
                    </div>

                    <div className='character_info'>
                        <h3>{character.name}</h3>
                        <p>{character.location.name}</p>
                    </div>
                    
                    <div className='character_status'>
                        <p>{character.status}</p>
                    </div> 

                    <button className='AddtoCart'>Add to cart</button>

                </div>
                </>
            ))}
           

            {/* <Characters /> */}
          
          
        </main>

      </div>

    </>
  );
}

export default App;
