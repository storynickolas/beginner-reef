import '../App.css';
import React, { useEffect, useState } from 'react';
import Card from './Card';

function Reef({animalType, addWish, title, search, clear}) {

  const [fish, setFish] = useState([])

  useEffect(() => {
    console.log(search)
    fetch(`http://localhost:3000/${animalType}`)
      .then((response) => response.json())
      .then((data) => {
        setFish(data)
      });
  }, [animalType]);

  useEffect(() => {
    let cows = []
    if(clear){
      console.log(clear)
      fetch(`http://localhost:3000/${animalType}`)
      .then((response) => response.json())
      .then((data) => {
        setFish(data)
      });
    }
    else {
      console.log(clear)
      fish.forEach((item) => {
      if(item.name.startsWith(search) === true){
        cows.push(item)
      }
      })
      if(search !== '') {
        setFish(cows)
      }
    }
    
  }, [clear]);

  return (
    <div className="app">
      <h1>{title}</h1>
      {
        fish.length > 0 && fish.map((item) => 
          <Card key={item.name} item={item} addWish={addWish}/>
        )
      }
    </div>
  );
}

export default Reef;
