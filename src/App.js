import React, { Component } from 'react';
// eslint-disable-next-line import/no-named-as-default
import Calculator from './components/Calculator';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
