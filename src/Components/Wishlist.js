import '../App.css'
import React from 'react';


function WishList({wish, removeWish}) {

  const displayWish = () => {
    if(wish.length !== 0){
      return 'wishlistBox'
    }
    else {
      return 'wishlistBox2'
    }
  }

  return (
    <div className={displayWish()}>
      <h1>Your Wish List</h1>
      <div className='wishlist'>
        {wish.map((item) => 
            <div key={item.name} className="card2">
              <img src={item.image} alt={item.name} className="wish"/>
              <p>{item.name}</p>
              <button onClick={() => removeWish(item.name)} className='remove'>Remove</button>
            </div>
        )}
      </div>
    </div>
  );
}

export default WishList;