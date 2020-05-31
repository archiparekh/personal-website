import React from 'react';
import './App.css';
import Home from './components/Home';
import Work from './components/Work';
import Interests from './components/Interests';
import { BrowserRouter, Route } from 'react-router-dom';
 
function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Route exact path="/" component={Home} />
        <Route path="/work" component={Work} />
        <Route path="/interests" component={Interests} />
      </div>
    </BrowserRouter>
  );
}
 
export default App;