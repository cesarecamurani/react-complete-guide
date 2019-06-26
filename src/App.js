import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi! I'm a React App</h1>
        <Person name="Cesare" age="36"/>
        <Person name="Manu" age="26"/>
        <Person name="Luca" age="30"/>
      </div>
    );
  }
}

export default App;
