import '../App.css'
import React from 'react';
import Reef from './Reef';


function Coral({wish, addCow}) {
  return (
    <div className="Coral">
      <h1>Beginner Reef Coral</h1>
      <Reef input='coral' wish={wish} addCow={addCow}/>
    </div>
  );
}

export default Coral;
