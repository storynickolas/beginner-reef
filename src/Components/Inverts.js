import '../App.css';
import React from 'react';
import Reef from './Reef';


function Inverts({wish, addCow}) {
  return (
    <div className="inverts">
      <h1>Beginner Reef Invertebrates</h1>
      <Reef input='inverts' wish={wish} addCow={addCow}/>
    </div>
  );
}

export default Inverts;
