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
  const [hide, setHide] = useState(false)


  function addWish(newWish) {
    if(hide === false) {
      setHide(true)
    }
    if(wish.some(item => item.name === newWish.name)){
      console.log("Object found inside the array.");
    } else{
      setWish([...wish, newWish])
    }
  }

  function removeWish(minus) {
    let cow = wish.filter((word) => word.name !== minus)
    setWish([...cow])
  }

  function handleSearch(e) {
    e.preventDefault()
    let mySearch = e.target.value
    setSearch(mySearch)
  }

  function clearSearch() {
    setSearch('')
    document.getElementById("search").value = ''
  }

  return (
    <div className="App">
       <BrowserRouter>
      <header className="App-header">
        <h2>Reef-O-Rama</h2>
        <NavBar clearSearch={clearSearch}/>
        <Search handleSearch={handleSearch}/>
      </header>
      <WishList wish={wish} removeWish={removeWish} hide={hide} setHide={setHide}/>
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
              search={search}
            />
          </Route>
          <Route exact path="/inverts">
            <Reef
              key='inverts'
              title='Beginner Reef Invertebrate'
              animalType='inverts' 
              addWish={addWish}
              search={search}
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
