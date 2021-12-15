import { React} from 'react';


/*  if (Characters.status.alive) {
    <div className='character_status' style="color:green, background-color:rgb(176, 234, 227) ">
        <p>{character.status}</p>
    </div> 
}

else if(Characters.status.dead) {
    <div className='character_status' style="color:red, background-color:rgb(176, 234, 227) ">
        <p>{character.status}</p>
    </div> 
}

else (Characters.status.unknown); {
    <div className='character_status' style="color:black, background-color:rgb(176, 234, 227) ">
        <p>{character.status}</p>
    </div> 
}  */


const Characters = ({results, setSearch}) => {

    return (
        <>  
            <div className="search-character">
              <input className="search-bar" onChange={ (event) => {setSearch(event.target.value); console.log(event)} } type="text" placeholder="Search for a character" />
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
                            if (character.status == 'alive') {
                                return(
                                    <div className='character_status' style="color:green, background-color:rgb(176, 234, 227) ">
                                        <p>{character.status}</p>
                                    </div> 
                                )
                            }
                            
                            else if(character.status == 'dead') {
                                return(
                                    <div className='character_status' style="color:red, background-color:rgb(176, 234, 227) ">
                                        <p>{character.status}</p>
                                    </div> 
                                )
                            }
                            
                            else (character.status == 'unknown'); {
                                return(
                                    <div className='character_status' style="color:black, background-color:rgb(176, 234, 227)" >
                                        <p>{character.status}</p>
                                    </div> 
                                )
                            }
                        })
                        }

                            <p>{character.status}</p>
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
 