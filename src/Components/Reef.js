import '../App.css';
import React, { useEffect, useState } from 'react';
import Card from './Card';

function Reef({animalType, addWish, title}) {

  const [fish, setFish] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/${animalType}`)
      .then((response) => response.json())
      .then((data) => {
        setFish(data)
      });
  }, [animalType]);

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
