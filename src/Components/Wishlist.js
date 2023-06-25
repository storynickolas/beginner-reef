import '../App.css'
import React from 'react';


function WishList({wish, removeWish, hide, setHide}) {

  const displayWish = () => {
    if(wish.length !== 0 && hide){
      return 'wishlistBox'
    }
    else {
      return 'wishlistBox2'
    }
  }

  return (
    <div className={displayWish()}>
      {hide ? 
      <h1>Your Wish List <button onClick={() => setHide(!hide)}><i className="arrow down"></i></button></h1>
      :
      <h1>Your Wish List <button onClick={() => setHide(!hide)}><i className="arrow up"></i></button></h1>
    }
      <div className='wishlist'>
        {wish.map((item) => 
            <div 
              key={item.name} 
              className="card2"
            >
            <img 
              src={item.image} 
              alt={item.name} 
              className="wish"
            />
            <p>
              {item.name}
            </p>
            <button 
              onClick={() => 
                removeWish(item.name)
              } 
              className='remove'
            >
              Remove
            </button>
            </div>
        )}
      </div>
    </div>
  );
}

export default WishList;