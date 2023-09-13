import React, { useState } from "react";
import useBookSearch from './useBookSearch';



function App() {
  const [query,setQuery]= useState('')
  const [pageNumber,setpageNumber]= useState(1)

  function handleSearch(e){
    setQuery(e.target.value);
    setpageNumber(1);
  }
  const{
    books,
    hasMore,
    loading,
    error
  }= useBookSearch(query,pageNumber);

  // useBookSearch(query, pageNumber);
  return (
  <>
     <input type="text" onChange={handleSearch}></input>
     {books.map(book =>{
      return <div key= {book}>{book}</div>
     })}
    <div>{loading && 'loading....'}</div>
    <div>{error && 'eroor....'}</div>
  </>
  );
}

export default App;
