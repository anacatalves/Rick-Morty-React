import {react, useState, useEffect} from 'react';
import Characters from "../components/characters";

function Episodes ({ results }){
    let [resultsEpisodes, setResultsEpisodes] = useState([]);
    let apiEpisodes = `https://rickandmortyapi.com/api/episode`;

    useEffect(() => {
    async function GetEpisodes (){
        let response = await fetch (apiEpisodes); 
        let data = await response.json();
        setResultsEpisodes(data.results.map(({ id }) => ({ label: id, value: id })));
    }
        GetEpisodes ();
    });

    return (

        <main>
        <h1 className="page-title">Episode: <b>Pilot</b></h1>

            <div className="main-content">

                <section className="main-column1">
                    <h1>Pick Episode</h1>
                    <article className='filter-box'>
                        <select>
                            {resultsEpisodes.map(({ label, value }) => (
                                <option key={value} value={value}>
                                Episode - {label}
                                </option>
                        ))}
                        </select>
                    </article>
                </section>

               {/*  <section className="main-column2">
                     <Characters results={ results } />  
                </section> */}
            </div>
        </main>

    )
}

export default Episodes;