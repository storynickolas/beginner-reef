import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter, Routes, Switch } from "react-router-dom";
import NavBar from './NavBar';
import Fish from './Fish'
import Coral from './Coral';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Reef Tank Advice</h1>
      </header>
      <BrowserRouter>
        <Switch>
          <Route exact path="/fish"><Fish/></Route>
          <Route exact path="/coral"><Coral/></Route>
        </Switch>
      
      </BrowserRouter>
      <h1>Reef Tank Advice</h1>
   
      {/* <button onClick={handleClick}>Change Amimals</button>
        <p>
          REEF TANK ADVICE
        </p>
        <ul>
        {fish.map((item) => 
          <li key={item.id}>
            <img src={item.image} alt={item.name}/>
            {item.name}
          </li>
          )}
        </ul> */}
    </div>
  );
}

export default App;
