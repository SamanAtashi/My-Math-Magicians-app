import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Calculator from './components/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';
import './App.css';

const App = () => (
  <Switch>
    <Route path="/calculator">
      <div className="App">
        <Calculator />
      </div>
    </Route>
    <Route path="/quote">
      <Quote />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default App;
