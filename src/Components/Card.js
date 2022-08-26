import '../App.css'
import React from 'react';


function Card({item, addWish}) {
  return (
    <div key={item.id} className="card">
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name}/>
            <button onClick={() => addWish(item)}>Add to WishList</button>
    </div>
  );
}

export default Card;