import {react, useState, useEffect} from 'react';
import Characters from "../components/characters";
import Filters from "../components/filters";
import Paginacion from '../components/paginacion';



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
                        <Characters results={results} setSearch={setSearch} /> 
                    </section>

                    <Paginacion page={page} setPage={setPage}></Paginacion>
                    
                </div>
        </main>
    )
}




export default Home
