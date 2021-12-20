import React from 'react'

const Pagination = ({page, setPage}) => {

  function NextPage (){
    if (page <= 42 ) {
      setPage (++page);
    }
  }

  function PreviousPage (){
    setPage (--page);
  }
  return (
    <div class= "pagination-buttons">
      <button class= "Previous" onClick={PreviousPage}>Previous</button>      
      <button class= "Next" onClick={NextPage}>Next</button>
    </div>
  )
}

export default Pagination
