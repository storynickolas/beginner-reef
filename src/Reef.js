import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter, Link, NavLink } from "react-router-dom";
// import NavBar from './NavBar';
// import Fish from './Fish'

function Reef({input}) {

  const [fish, setFish] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/${input}`)
      .then((response) => response.json())
      .then((data) => {
        setFish(data)
      });
  }, []);

  return (
    <div className="App">
        <NavLink
          to="/fish"
          exact
          style={
            {
              background: "white",
              padding: '20px'
            }
          }
          activeStyle={{
            background: "red"
          }}
        >
          Fish
        </NavLink>
        <NavLink
          to="/coral"
          exact
          style={
            {
              background: "white",
              padding: '20px'
            }
          }
          activeStyle={{
            background: "red"
          }}
        >
          Coral
        </NavLink>
        <NavLink
          to="/inverts"
          exact
          style={
            {
              background: "white",
              padding: '20px'
            }
          }
          activeStyle={{
            background: "red"
          }}
        >
          Invertebrates
        </NavLink>
        {fish.map((item) => 
          <div key={item.id}>
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name}/>
          </div>
          )}
    </div>
  );
}

export default Reef;
