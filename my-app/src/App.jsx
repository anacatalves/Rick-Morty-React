import react from 'react';
import Characters from "./components/characters";
import './assets/css/main.css';

function App() {
  
  return (
    <>

      <div class="body">

        <header class="nav-bar">
          <h1>Rick & Morty <b>NFT</b></h1>

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

            <Characters />
          
          
        </main>

      </div>

    </>
  );
}

export default App;
