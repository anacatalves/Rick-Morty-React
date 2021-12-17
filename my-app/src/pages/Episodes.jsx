import {react, useState, useEffect} from 'react';


function Episodes (){
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
        <select>
            {resultsEpisodes.map(({ label, value }) => (
                <option key={value} value={value}>
                    Episode - {label}
                </option>
            ))}
        </select>
    )
}

export default Episodes