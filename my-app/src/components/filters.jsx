import { React } from 'react';

function Filters ({ setStatus , setSpecies, setGender}) {

    return (
        <>
            <div className="filters">
                <h2>Filters</h2>
                <a href="" target="">Clear Filters</a>
            </div>
                
            <article className="filter-box">{/* componente a extrair */}
                <details>
                  <summary>Status</summary>
                  <input type="radio" id="alive" name="status" value="alive" onClick={ (event) => {setStatus(event.target.value)} } />
                  <label for="alive">ALIVE</label>
                  <input type="radio" id="dead" name="status" value="dead" onClick={ (event) => {setStatus(event.target.value)} } />
                  <label for="dead">DEAD</label>
                  <input type="radio" id="unknown" name="status" value="unknown" onClick={ (event) => {setStatus(event.target.value)} } />
                  <label for="unknown">UNKNOWN</label>
                </details>

                <details>
                  <summary>Species</summary>
                  <input type="radio" id="human" name="species" value="human" onClick={ (event) => {setSpecies(event.target.value)} }/>
                  <label for="human">HUMAN</label>
                  <input type="radio" id="alien" name="species" value="alien" onClick={ (event) => {setSpecies(event.target.value)} }/>
                  <label for="alien">ALIEN</label>
                  <input type="radio" id="mythological creature" name="species" value="mythological creature" onClick={ (event) => {setSpecies(event.target.value)} }/>
                  <label for="mythological creature">MYTHOLOGICAL CREATURE</label>
                </details>

                <details>
                  <summary>Gender</summary>
                  <input type="radio" id="male" name="gender" value="male" onClick={ (event) => {setGender(event.target.value)} }/>
                  <label for="male">MALE</label>
                  <input type="radio" id="female" name="gender" value="female" onClick={ (event) => {setGender(event.target.value)} }/>
                  <label for="female">FEMALE</label>
                  <input type="radio" id="genderless" name="gender" value="genderless" onClick={ (event) => {setGender(event.target.value)} }/>
                  <label for="genderless">GENDERLESS</label>
                </details>

              </article>
        </>
    )
}

export default Filters