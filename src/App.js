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
  let donkey

  function addCow(duck) {
    setWish([...wish, duck])
    console.log(wish)
  }

  return (
    <div className="App">
       <BrowserRouter>
      <header className="App-header">
        <h1>Beginner Reef Tank Advice</h1>
        <NavBar/>
      </header>
        <WishList/>
        <button onClick={addCow} /> 
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/fish"><Fish wish={wish} addCow={(cow) => addCow(cow)}/></Route>
          <Route exact path="/coral"><Coral wish={wish} addCow={addCow}/></Route>
          <Route exact path="/inverts"><Inverts wish={wish} addCow={addCow}/></Route>
          <Route exact path="/addItem"><Form/></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
