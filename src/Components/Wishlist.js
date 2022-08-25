import '../App.css'
import React from 'react';
import Reef from './Reef';


function WishList({wish}) {
  return (
    <div className="Coral">
      <h1>Your Wish List</h1>
      {wish.map((item) => 
          <div key={wish.indexOf(item)} className="card2">
            <img src={item} />
          </div>
      )}
    </div>
  );
}

export default WishList;