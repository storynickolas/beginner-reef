import '../App.css'
import React, { useState } from 'react';

function Search({ handleSearch }) {

  return (
    <div className='search'>
      <br/>
      <br/>
      <br/>
      <label>Search:  </label>
      <input id='search' onChange={handleSearch} ></input>
    </div>
  );
}

export default Search;