import react from 'react';
import Characters from "./components/Characters";
import './assets/css/main.css';


function App() {
  
  return (
    <>

      <div className="body">

        <header className="nav-bar">
          <h1>Rick & Morty Wiki</h1>

          <nav> {/* componente a extrair */}
            <a href="" target="_blank">Characters</a>
            <a href="" target="_blank">Episodes</a>
            <a href="" target="_blank">Locations</a>
          </nav>

        </header>

        <main className="container">

          <div className="main-column1">
            {/* componente a extrair */}
            <article className="filter-box">
              filter-box!!!
            </article>
          </div>

          {/* componente a extrair */}
          <div className="main-column2">

            <h1>Characters</h1>

  
            <Characters />
         
          </div>

            
          
          
        </main>

      </div>

    </>
  );
}

export default App;
