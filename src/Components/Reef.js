import '../App.css';
import React, { useEffect, useState } from 'react';

function Reef({input, wish, addCow}) {

  const [fish, setFish] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/${input}`)
      .then((response) => response.json())
      .then((data) => {
        setFish(data)
      });
  }, []);

  return (
    <div className="app">
        {fish.map((item) => 
          <div key={item.id} className="card">
            <button onClick={() => addCow(item)}></button>
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name}/>
          </div>
          )}
    </div>
  );
}

export default Reef;
