import '../App.css'
import React, { useState } from 'react';

function Search({ handleSearch, clearSearch }) {
  const [newSearch, setNewSearch] = useState()

  function handleChange(e) {
    e.preventDefault();
    let mySearch = e.target.value
    setNewSearch(mySearch)
  }

  return (
    <div>
      <h3>SEARCH: 
        <form onSubmit={(e) => handleSearch(e, newSearch)}>
          <input onChange={handleChange}></input>
          <button onClick={clearSearch}>Clear</button>
        </form>
      </h3>
      <br />
      <br />
    </div>
  );
}

export default Search;