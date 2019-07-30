import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    people: [
      { name: 'Cesare', age: '36'},
      { name: 'Manu', age: '26'},
      { name: 'Luca', age: '30'}
    ],
    showPeople: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      people: [
        { name: newName, age: '36'},
        { name: 'Manu', age: '26'},
        { name: 'Luca', age: '30'}
      ]}
    )
  }

  nameChangedhandler = (event) => {
    this.setState({
      people: [
        { name: 'Cesare', age: '36'},
        { name: event.target.value, age: '26'},
        { name: 'Luca', age: '30'}
      ]}
    )
  }

  togglePeopleHandler = () => {
    const showing = this.state.showPeople;
    this.setState({ showPeople: !showing })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px light gray',
      padding: '8px',
      cursor: 'pointer'
    }

    let people = null;

    if ( this.state.showPeople ) {
      people = (
        <div>
          <Person
            name={this.state.people[0].name}
            age={this.state.people[0].age}> Watching TV Series </Person>
          <Person
            name={this.state.people[1].name}
            age={this.state.people[1].age}
            click={this.switchNameHandler.bind(this, "Ceasar")}
            changed={this.nameChangedhandler}> Riding E-Scooters </Person>
          <Person
            name={this.state.people[2].name}
            age={this.state.people[2].age}> Eating Cardboard </Person>
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi! I'm a React App</h1>
        <button
          style={style}
          onClick={ this.togglePeopleHandler }> Show Peoples </button>
        { people }
      </div>
    );
  }
}

export default App;


// Functional approach below (with setState() hook example):

// import React, { Component, useState } from 'react';
// import Person from './Person/Person';
// import './App.css';
//
// const app = props => {
//   const [ peopleState, setPeopleState ] = useState({
//     people: [
//       { name: 'Cesare', age: '36'},
//       { name: 'Manu', age: '26'},
//       { name: 'Luca', age: '30'}
//     ]
//   })
//
//   const switchNameHandler = () => {
//     setPeopleState({
//       people: [
//         { name: 'Cesarone', age: '36'},
//         { name: 'Manu', age: '26'},
//         { name: 'Luca', age: '30'}
//       ]}
//     )
//   }
//
//   return (
//     <div className="App">
//       <h1>Hi! I'm a React App</h1>
//       <button onClick={switchNameHandler}> Switch Name </button>
//       <Person
//         name={peopleState.people[0].name}
//         age={peopleState.people[0].age}> Watching TV Series </Person>
//       <Person
//         name={peopleState.people[1].name}
//         age={peopleState.people[1].age}> Coding </Person>
//       <Person
//         name={peopleState.people[2].name}
//         age={peopleState.people[2].age}> Eating Vegan </Person>
//     </div>
//   );
// }
//
//
// export default app;
//
