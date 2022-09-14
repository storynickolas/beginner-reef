import '../App.css'
import React from 'react';

function Search() {

  function handleChange(e) {
    e.preventDefault();
    let newSearch = e.target.value
  }

  return (
    <div>
      <h3>SEARCH: 
        <input defaultValue={'Search...'} onChange={handleChange}></input>
      </h3>
      <br />
      <br />
    </div>
  );
}

export default Search;