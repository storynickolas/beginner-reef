import './App.css';
import React, { useState } from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import NavBar from './Components/NavBar';
import Form from './Components/Form';
import WishList from './Components/Wishlist';
import Home from './Components/Home';
import Reef from './Components/Reef';
import Search from './Components/Search';

function App() {
  const [wish, setWish] = useState([])
  const [search, setSearch] = useState('')

  function addWish(newWish) {
    if(wish.indexOf(newWish) === -1) {
      setWish([...wish, newWish])
    }
  }

  function removeWish(minus) {
    let cow = wish.filter((word) => word.name !== minus)
    setWish([...cow])
  }

  function handleSearch(e, query) {
    e.preventDefault()
    let capitalSearch = query.charAt(0).toUpperCase() + query.slice(1)
    setSearch(capitalSearch)
  }

  return (
    <div className="App">
       <BrowserRouter>
      <header className="App-header">
        <h1>Reef-O-Rama</h1>
        <NavBar/>
        <Search handleSearch={handleSearch}/>
      </header>
      <WishList wish={wish} removeWish={removeWish}/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/fish">
            <Reef
              key='fish'
              title='Beginner Reef Fish'
              animalType='fish' 
              addWish={addWish}
              search={search}
            />
          </Route>
          <Route exact path="/coral">
            <Reef 
              key='coral'
              title='Beginner Reef Coral'
              animalType='coral' 
              addWish={addWish}
            />
          </Route>
          <Route exact path="/inverts">
            <Reef
              key='inverts'
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
