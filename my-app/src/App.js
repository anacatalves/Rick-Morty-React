

function App() {
  return (
    <>

    <div class="body">

      <header class="nav-bar">
        <h1>Rick & Morty Wiki</h1>

        <nav> {/* componente a extrair */}
          <p></p>
          <p></p>
          <p></p>
        </nav>

      </header>

      <main class="container">

        <div class="main-column1">
          <article class="filter-box"></article>{/* componente a extrair */}
        </div>

        <div class="main-column2">
          <main class="search-bar"></main>

          <main class="characters"></main>{/* componente a extrair */}

        </div>
        
      </main>

    </div>

    </>
  );
}

export default App;
