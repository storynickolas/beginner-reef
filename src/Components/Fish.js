import '../App.css';
import React from 'react';
import Reef from './Reef';


function Fish({wish, addCow}) {
  return (
    <div className="Fish">
      <h1>Beginner Reef Fish</h1>
      <Reef input='fish' wish={wish} addCow={(cow) => addCow(cow)}/>
    </div>
  );
}

export default Fish;
