import '../App.css'
import React from 'react';

function Search({ handleSearch, search }) {

  return (
    <div>
      <h3>SEARCH: 
        <input onChange={handleSearch}></input>
        <p>{search}</p>
      </h3>
      <br />
      <br />
    </div>
  );
}

export default Search;