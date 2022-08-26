import './App.css';
import React, { useState } from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import NavBar from './Components/NavBar';
import Form from './Components/Form';
import WishList from './Components/Wishlist';
import Home from './Components/Home';
import Reef from './Components/Reef';

function App() {
  const [wish, setWish] = useState([])

  function addWish(newWish) {
    setWish([...wish, newWish])
  }

  function removeWish(minus) {
    let cow = wish.filter((word) => word.name !== minus)
    setWish([...cow])
  }

  return (
    <div className="App">
       <BrowserRouter>
      <header className="App-header">
        <h1>Reef-O-Rama</h1>
        <NavBar/>
      </header>
      <WishList wish={wish} removeWish={removeWish}/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/fish">
            <Reef
              title='Beginner Reef Fish'
              animalType='fish' 
              addWish={addWish}
            />
          </Route>
          <Route exact path="/coral">
            <Reef 
              title='Beginner Reef Coral'
              animalType='coral' 
              addWish={addWish}
            />
          </Route>
          <Route exact path="/inverts">
            <Reef
              title='Beginner Reef Invertebrate'
              animalType='inverts' 
              addWish={addWish}
            />
          </Route>
          <Route exact path="/addItem"><Form/></Route>
        </Switch>
      </BrowserRouter>
      <div className='fill'/>
    </div>
  );
}

export default App;
