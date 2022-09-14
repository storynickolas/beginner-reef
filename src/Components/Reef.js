import '../App.css';
import React, { useEffect, useState } from 'react';
import Card from './Card';

function Reef({animalType, addWish, title, search}) {

  const [fish, setFish] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/${animalType}`)
      .then((response) => response.json())
      .then((data) => {
        setFish(data)
      });
  }, [animalType]);

  useEffect(() => {
    let cows = []
    console.log(search)
    // fish.forEach((item) => {
    //   if(item.name.startsWith(search)){
    //     console.log(item)
    //   }
    // })
  }, [search]);

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
