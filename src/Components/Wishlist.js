import '../App.css'
import React from 'react';


function WishList({wish}) {
  return (
    <div>
      <h1>Your Wish List</h1>
      <div className="wishlist">
        {wish.map((item) => 
            <div key={item.name} className="card2">
              <img src={item.image} alt={item.name} className="wish"/>
              <p>{item.name}</p>
            </div>
        )}
      </div>
    </div>
  );
}

export default WishList;