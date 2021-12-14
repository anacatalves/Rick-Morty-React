import { React} from 'react';

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
 