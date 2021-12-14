import { React, useEffect, useState } from 'react';

const Characters = () => {

    let [results, setResults] = useState([]);
    let api = "https://rickandmortyapi.com/api/character";

    useEffect(() => {
        (async () => {
            let response = await fetch (api);
            let data = await response.json();
            
            setResults(data.results);
            
        })();
    }, [api]); 

    return (
        <>
            {results.map ((character) => (
              <>
              <div className='character_card'>
                  <div className='character_image'>
                      <img src={character.image} alt="" />
                  </div>

                  <div className='character_info'>
                      <h3>{character.name}</h3>
                      <p>{character.location.name}</p>
                  </div>
                  
                  <div className='character_status'>
                      <p>{character.status}</p>
                  </div> 
              </div>
              </>
          ))} 
        </>
    )
}

export default Characters
 