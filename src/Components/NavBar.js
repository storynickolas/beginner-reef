import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ clearSearch }) {
  return (
    <div >
      <NavLink
          to="/"
          exact
          style={
            {
              background: "white",
              padding: '20px',
              color: "#094067"
            }
          }
          activeStyle={{
            background: 'rgb(61, 169, 252)',
            color: 'white'
          }}
        >
        Home
      </NavLink>
      <NavLink
          to="/fish"
          exact
          style={
            {
              background: "white",
              padding: '20px',
              color: "#094067"
            }
          }
          activeStyle={{
            background: 'rgb(61, 169, 252)',
            color: 'white'
          }}
          onClick={() => clearSearch()}
        >
        Fish
      </NavLink>
      <NavLink
        to="/coral"
        exact
        style={
          {
            background: "white",
            padding: '20px',
            color: "#094067"
          }
        }
        activeStyle={{
          background: 'rgb(61, 169, 252)',
          color: 'white'
        }}
        onClick={() => clearSearch()}
      >
        Coral
      </NavLink>
      <NavLink
        to="/inverts"
        exact
        style={
          {
            background: "white",
            padding: '20px',
            color: "#094067"
          }
        }
        activeStyle={{
          background: 'rgb(61, 169, 252)',
          color: 'white'
        }}
        onClick={() => clearSearch()}
      >
        Invertebrates
      </NavLink>
      <NavLink
        to="/addItem"
        exact
        style={
          {
            background: "white",
            padding: '20px',
            color: "#094067"
          }
        }
        activeStyle={{
          background: 'rgb(61, 169, 252)',
          color: 'white'
        }}
      >
        Additions
      </NavLink>
    </div>
  );
}

export default NavBar;