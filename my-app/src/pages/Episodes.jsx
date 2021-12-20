import {react, useState, useEffect} from 'react';
import Characters from "../components/characters";

function Episodes ({results}){
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
                            
                                {[...Array(51).keys()].map((value) => {
                                    return <option key={value} value={value+1}>
                                    Episode - {value+1}</option>
                                })}
                
                        </select>
                    </article>
                </section>

                <section className="main-column2">
                     {/* <Characters results={results} />   */}
                </section>
            </div>
        </main>

    )
}

export default Episodes