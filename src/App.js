import React from 'react';
import './App.css';
import Work from './components/Work.js';
import Home from './components/Home.js';
import { BrowserRouter, Route } from 'react-router-dom';
 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/work" component={Work} />
      </div>
    </BrowserRouter>
  );
}
 
export default App;