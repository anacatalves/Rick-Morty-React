import {react, useState, useEffect} from 'react';
import CharactersCards from "../components/charactersCards";

function Episodes ({addToCart}){
    let [results, setResults] = useState([]);
    let [episodeNumber, setEpisodeNumber] = useState(1);
    let [episodesInfo, setEpisodesInfo] = useState("");
    let apiEpisodes = `https://rickandmortyapi.com/api/episode/${episodeNumber}`;

    useEffect(() => {
    (async () => {
        let response = await fetch (apiEpisodes); 
        let data = await response.json();
        
        let characters = await Promise.all (data.characters.map ((characterUrl) => {
            return fetch(characterUrl).then(response => response.json());
        }))
        setResults(characters);
        setEpisodesInfo(data);
    })();
    },[apiEpisodes]);

    return (

        <main className="episodesPage">

            <h1 className="page-title">Episode: <b>{episodesInfo.name}</b></h1>
            <h1 className="page-subtitle"> Air date: {episodesInfo.air_date} </h1>

            <div className="main-content">

                <section className="main-column1">
                    <h1>Pick Episode</h1>
                    <article className='filter-box'>
                        <select onChange={ (event) => {setEpisodeNumber(event.target.value)} }>
                        
                            {[...Array(51).keys()].map((value) => {
                                return (
                                <option key={value} value={value+1}>
                                    Episode - {value+1}
                                </option>
                                )
                            })}
                
                        </select>
                    </article>
                </section>

                <section className="main-column2">
                   <CharactersCards results={results} addToCart={addToCart}/> 
                </section>
            </div>
        </main>

    )
}

export default Episodes;