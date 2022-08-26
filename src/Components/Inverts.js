import '../App.css';
import React from 'react';
import Reef from './Reef';


function Inverts({addWish}) {
  return (
    <div className="inverts">
      <h1>Beginner Reef Invertebrates</h1>
      <Reef input='inverts' addWish={(cow) => addWish(cow)}/>
    </div>
  );
}

export default Inverts;
