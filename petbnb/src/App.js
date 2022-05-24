import React from 'react';
import './App.css';
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <main>
        <img src={require('./assets/images/stock-photos/pets-0.jpeg')} alt="cats" />
        <span> lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem!</span>
      </main>
    </div>
  );
}

export default App;
