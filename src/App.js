import React from 'react';
import './components/Navigation.css';
import './App.css';
import Home from './components/Home';
import Work from './components/Work';
import Interests from './components/Interests';
import { BrowserRouter, Route } from 'react-router-dom';
 
function App() {
  return (
      <div className="App">
        <Home></Home>
      </div>
  );
}
 
export default App;