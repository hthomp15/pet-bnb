import React from 'react';
import './App.css';
import { Header, Navbar } from './components/Common'
import Dashboard from './components/Dashboard/dashboard';

function App() {
  return (
    <div className='App'>
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
