import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './pages/About';
import Shop from './pages/Shop';
import Nav from './nav/Nav'
import Home from './pages/Home'
import ItemDetail from'./ItemDetail';

function App() {
  return (
    <Router> 
    
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path= "/shop/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}



export default App;
