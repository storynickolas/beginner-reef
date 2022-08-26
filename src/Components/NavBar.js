import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
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