import '../App.css'
import React from 'react';
import Reef from './Reef';


function Coral({addWish}) {
  return (
    <div className="Coral">
      <h1>Beginner Reef Coral</h1>
      <Reef input='coral' addWish={(cow) => addWish(cow)}/>
    </div>
  );
}

export default Coral;
