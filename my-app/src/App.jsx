import react from 'react';
import Characters from "./components/Characters";
import './assets/css/main.css';

function App() {
  
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

            <Characters />
          
          
        </main>

      </div>

    </>
  );
}

export default App;
