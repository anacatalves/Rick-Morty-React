import React from 'react'

export const SearchCharacter = ( {setSearch}) => {
    return (
        <div className="search-character">
              <input className="search-bar" onChange={ (event) => {setSearch(event.target.value)} } type="text" placeholder="Search for a character" />
              <button>Search</button>
        </div> 
    )
}

export default SearchCharacter