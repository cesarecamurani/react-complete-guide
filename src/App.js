import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    people: [
      { name: 'Cesare', age: '36'},
      { name: 'Manu', age: '26'},
      { name: 'Luca', age: '30'}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('It was clicked!')
    // this.state.people[0].name = 'Cesarone' --> Wrong way!!!
    this.setState({
      people: [
        { name: newName, age: '36'},
        { name: 'Manu', age: '26'},
        { name: 'Luca', age: '30'}
      ]}
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi! I'm a React App</h1>
        <button onClick={() => this.switchNameHandler("Cesarone")}> Switch Name </button>
        <Person
          name={this.state.people[0].name}
          age={this.state.people[0].age}> Watching TV Series </Person>
        <Person
          name={this.state.people[1].name}
          age={this.state.people[1].age}
          click={this.switchNameHandler.bind(this, "Ceasar")}> Coding </Person>
        <Person
          name={this.state.people[2].name}
          age={this.state.people[2].age}> Eating Vegan </Person>
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
