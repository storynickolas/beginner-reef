import '../App.css';
import React from 'react';
import Reef from './Reef';


function Fish({addWish}) {
  return (
    <div className="Fish">
      <h1>Beginner Reef Fish</h1>
      <Reef input='fish' addWish={(cow) => addWish(cow)}/>
    </div>
  );
}

export default Fish;
