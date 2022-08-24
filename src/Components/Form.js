import '../App.css';
import React, { useState } from 'react';

function Form() {

  const [newItem, setNewItem] = useState('fish')
  const [newName, setNewName] = useState('')
  const [newImage, setNewImage] = useState('')

  function handleName(e) {
    e.preventDefault();
    let newCity = e.target.value
    setNewName(newCity)
  }

  function handleImage(e) {
    e.preventDefault();
    let newCity = e.target.value
    setNewImage(newCity)
  }

  function handleSelect(e) {
    e.preventDefault();
    let newState = e.target.value
    setNewItem(newState)
  }

  let newObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      'category': newItem,
      'name': newName,
      'image': newImage
    })
  }

  function submitForm(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/${newItem}`, newObject);
  };
    


  return (
    <div className='form-page'>
      <br></br>
      <br></br>
      <form className='form'>
        <h1>Add a Suggestion</h1>
        Category: 
        <select onChange={handleSelect} className="input">
          <option value="fish">Fish</option>
          <option value="coral">Coral</option>
          <option value="Inverts">Invertebrates</option>
        </select>
        <br/>
        Name: <input onChange={handleName} className="input"></input>
        <br/>
        Image: <input onChange={handleImage} className="input"></input>
        <div className='submit'>
          <button onClick={submitForm} className="button">Add Item</button>
        </div>
      </form>
    </div>
  );
}

export default Form;