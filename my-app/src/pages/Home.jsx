import {react, useState, useEffect} from 'react';
import CharactersCards from "../components/charactersCards";
import SearchCharacter from '../components/searchCharacter';
import Filters from "../components/filters";
<<<<<<< HEAD
import Paginacion from '../components/paginacion';

=======
import Pagination from '../components/pagination';
>>>>>>> 6456f36356b45e8f1483e8194debf81884d5c788


function Home (){
    let [results, setResults] = useState([]);
    let [search, setSearch] = useState("");
    let [status, setStatus] = useState("");
    let [gender, setGender] = useState("");
    let [species, setSpecies] = useState("");
    let [page, setPage] = useState (1);

    
    let api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=${status}&species=${species}&gender=${gender}`;

  
    useEffect(() => {
        (async () => {
            let response = await fetch (api);
            let data = await response.json();
            
            setResults(data.results);
            
        })();
    }, [api]); 

    return (
        
        <main>
            <h1 className="page-title">Characters</h1>

                <div className="main-content">

                    <section className="main-column1">
                        <Filters status={status} setStatus={setStatus} species={species} setSpecies={setSpecies} gender={gender} setGender={setGender}/>
                    </section>
          
                    <section className="main-column2">
                        <SearchCharacter setSearch={setSearch} />
                        <CharactersCards results={results} /> 
                    </section>

                    <Paginacion page={page} setPage={setPage}></Paginacion>

                </div>
        </main>
    )
}




export default Home
