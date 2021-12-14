import { React, useEffect, useState } from 'react';
//import searchIcon from "../img/search-icon.png";

const Characters = () => {

    let [results, setResults] = useState([]);
    let [api, setApi] = useState("https://rickandmortyapi.com/api/character");
    let [search, setSearch] = useState(undefined);

    useEffect(() => {
        (async () => {
            let response = await fetch (api);
            let data = await response.json();
            
            setResults(data.results);
            
        })();
    }, [api]); 

    useEffect(() => {
        if (search !== undefined) {
            setApi(api = `https://rickandmortyapi.com/api/character/?name=${search}`)
        }
        
    }, [search])

   /*  function searchCharacter (event) {
        setSearch(event.target.value)
    }; */

    return (
        <>  
            <div className="search-character">
              <input className="search-bar" /* onClick={searchCharacter()}  */type="text" placeholder="Search for a character" value="" />
              {/* <img src={searchIcon} alt="" /> */}
            </div> 

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
 