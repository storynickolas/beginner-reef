import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter, NavLink, Switch, Link } from "react-router-dom";
import NavBar from './NavBar';
import Fish from './Fish'
import Coral from './Coral';
import Inverts from './Inverts';

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
          <Route exact path="/inverts"><Inverts/></Route>
        </Switch>
      
      </BrowserRouter>
      <h1>Reef Tank Advice</h1>
    </div>
  );
}

export default App;
