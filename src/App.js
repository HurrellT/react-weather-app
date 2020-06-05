import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './HomePage';

function App() {

  return (
    <div className="App">
      <NavBar name="React Weather App" />
      <div className="container-fluid">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
