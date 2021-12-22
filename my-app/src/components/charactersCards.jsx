import { React} from 'react';

const CharactersCards = ( {results, addToCart} ) => {

    return (
        <>  
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

                        <button className='AddtoCart' onClick={ () => {addToCart(character)} }>Add to cart</button> 
                        
                    </div>
                    </>
                ))} 
            </div>
        </>
    )
}

export default CharactersCards
 