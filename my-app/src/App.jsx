import Characters from "./components/characters";
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
          <article class="filter-box"></article>{/* componente a extrair */}
        </div>

        <div class="main-column2">
          <div class="search-bar">
            
          </div>

          {/* <div class="characters"></div>componente a extrair */}
          <Characters />

        </div>
        
      </main>

    </div>

    </>
  );
}

export default App;
