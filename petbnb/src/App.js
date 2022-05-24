import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard'
import Nav from './components/Nav'
import bgImg from './assets/images/stock-photos/pets-0.jpeg'



function App() {
  return (
    <section>
      <div className="App">
      <header className="App-header">
        <h1>PetBnB</h1>
        <p> Welcome to PetBnB!</p>
        <img src={require('./assets/images/stock-photos/pets-0.jpeg')} alt="cats" />
        <span> lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem!</span> 
        <Nav/>
      </header>
    </div>
    <main>
      <Dashboard src={bgImg} alt="a picture" title="Hello world" content="A whole new world is here with a new dog pr cat" />
    </main>
    </section>
    
    
  );
}

export default App;
