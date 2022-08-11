import './App.css';
import React from 'react';
import Reef from './Reef';
import { Link } from 'react-router-dom';


function Fish() {
  return (
    <div className="Fish">
      <Reef input='fish'/>
    </div>
  );
}

export default Fish;
