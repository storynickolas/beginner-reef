import '../App.css'
import React, { useState } from 'react';

function Search({ handleSearch }) {

  return (
    <div>
      <h3>SEARCH: 
          <input id='search' onChange={handleSearch} ></input>
      </h3>
      <br />
      <br />
    </div>
  );
}

export default Search;