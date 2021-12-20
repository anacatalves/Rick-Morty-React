import React from 'react'

const Paginacion = ({page, setPage}) => {

  function NextPage (){
    if (page <= 42 ) {
      setPage (++page);
    }
  }

  function PreviousPage (){
    setPage (--page);
  }
  return (
    <div>
      <button class= "Next" onClick={NextPage}>Next</button>
      <button class= "Previous" onClick={PreviousPage}>Previous</button>      
    </div>
  )
}

export default Paginacion
