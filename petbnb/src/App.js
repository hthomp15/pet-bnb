import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PetBnB</h1>
        <p> Welcome to PetBnB!</p>
        <img src={require('./assets/images/stock-photos/pets-0.jpeg')} alt="cats" />
        <span> lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem!</span> 
      </header>
    </div>
  );
}

export default App;
