import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Calculator from './components/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';
import './App.css';
import Navbar from './components/Navbar';

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route path="/calculator">
        <div className="App">
          <h2>Let&apos;s do some Calculation!</h2>
          <Calculator />
        </div>
      </Route>
      <Route path="/quote">
        <Quote />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </>
);

export default App;
