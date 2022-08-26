import './App.css';
import React, { useState } from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Fish from './Components/Fish';
import Coral from './Components/Coral';
import Inverts from './Components/Inverts';
import NavBar from './Components/NavBar';
import Form from './Components/Form';
import WishList from './Components/Wishlist';
import Home from './Components/Home';

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
        <h1>Beginner Reef Tank Advice</h1>
        <NavBar/>
      </header>
      <WishList wish={wish} removeWish={removeWish}/>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/fish"><Fish  addWish={addWish}/></Route>
          <Route exact path="/coral"><Coral addWish={addWish}/></Route>
          <Route exact path="/inverts"><Inverts addWish={addWish}/></Route>
          <Route exact path="/addItem"><Form/></Route>
        </Switch>
      </BrowserRouter>
      <div className='fill'/>
    </div>
  );
}

export default App;
