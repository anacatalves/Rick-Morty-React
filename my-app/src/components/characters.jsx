import { React} from 'react';

const Characters = ({results, setSearch}) => {

    return (
        <>  
            <div className="search-character">
              <input className="search-bar" onChange={ (event) => {setSearch(event.target.value)} } type="text" placeholder="Search for a character" />
              <button>Search</button>
            </div> 

            <div className="character-list">
                {results.map ((character, index) => (
                <>
                    <div className='character_card' key={index}>
                        <div className='character_image'>
                            <img className='character_image' src={character.image} alt="" />
                        </div>

                        <div className='character_info'>
                            <h3>{character.name}</h3>
                            <p>{character.location.name}</p>
                        </div>
                        
                        <div className='character_status'>
                        
                            { (() => {
                                if (character.status == 'Alive') {
                                    return(
                                        <div className='character_status alive'>
                                            <p>{character.status}</p>
                                        </div> 
                                    )
                                }
                                
                                else if(character.status == 'Dead') {
                                    return(
                                        <div className='character_status dead'>
                                            <p>{character.status}</p>
                                        </div> 
                                    )
                                }
                                
                                else {
                                
                                    return(
                                        <div className='character_status unknown' >
                                            <p>{character.status}</p>
                                        </div> 
                                    )
                                }
                            })()
                            }
                
                        </div> 

                        <button className='AddtoCart'>Add to cart</button>
                    </div>
                    </>
                ))} 
            </div>
        </>
    )
}

export default Characters
 