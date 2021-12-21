import {React, useEffect, useState} from 'react';
import CharactersCards from "../components/charactersCards";

function Locations () {
    let [results, setResults] = useState([]);
    let [locationNumber, setLocationNumber] = useState(1);
    let [locationInfo, setLocationInfo] = useState("");
    let apiLocations = `https://rickandmortyapi.com/api/location/${locationNumber}`

    useEffect(() => {
        (async () => {
            let response = await fetch (apiLocations);
            let data = await response.json();
            
            let residents = await Promise.all (data.residents.map ((residentUrl) => {
                return fetch (residentUrl)
                .then ((response) => response.json())
            }))

            setResults(residents)
            setLocationInfo(data);    
        })();
        }, [apiLocations]); 

    return (
        <main className="locationsPage">

            <h1 className="page-title">Location: <b>{locationInfo.name}</b></h1>
            <h1 className="page-subtitle"> Type: {locationInfo.type} </h1>

            <div className="main-content">

                <section className="main-column1">
                    <h1>Pick Location</h1>
                    <article className='filter-box'>
                        <select onChange={ (event) => {setLocationNumber(event.target.value)} }>
                        
                            {[...Array(126).keys()].map((value) => {
                                return (
                                <option key={value} value={value+1}>
                                    Location - {value+1}
                                </option>
                                )
                            })}
                
                        </select>
                    </article>
                </section>

                <section className="main-column2">
                <CharactersCards results={results} /> 
                </section>

            </div>

        </main>

    )
}

export default Locations
