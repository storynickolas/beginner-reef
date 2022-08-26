import '../App.css';
import React, { useEffect, useState } from 'react';

function Reef({input, addWish}) {

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
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name}/>
            <button onClick={() => addWish(item)}>Add to WishList</button>
          </div>
          )}
    </div>
  );
}

export default Reef;
