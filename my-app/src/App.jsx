import react, { useState } from 'react';
//import Characters from "./components/Characters";
import './assets/css/main.css';

function App() {
  let [results, setResults] = useState([]);

  let api = "https://rickandmortyapi.com/api/character";

  fetch (api)
    .then ((response) => response.json())
    .then ((data) => setResults(data.results));

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
            {/* componente a extrair */}
            <article class="filter-box">
              filter-box
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
                        <img src="" alt="" />
                    </div>

                    <div className='character_info'>
                        <h3>{character.name}</h3>
                        <p>Location</p>
                    </div>
                    
                    <div className='character_status'>
                        <p>Alive</p>
                    </div> 
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
