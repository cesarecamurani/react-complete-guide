import React, { Component } from 'react'
import Person from './Components/Person/Person'
import Validation from './Components/Validation/Validation'
import './App.css'

class App extends Component {
  state = {
    people: [
      { id: 'zaq14', name: 'Cesare', age: '36'},
      { id: 'xsw25', name: 'Manu', age: '26'},
      { id: 'cde36', name: 'Luca', age: '30'}
    ],
    showPeople: false,
    textToValidate: ''
  }

  nameChangedhandler = (event, id) => {
    const personIndex = this.state.people.findIndex(p => { return p.id === id })
    const person = { ...this.state.people[personIndex] }
    // Alternative way below:
    // const person = Object.assign({}, this.state.people[personIndex])
    person.name = event.target.value
    const people = [...this.state.people]
    people[personIndex] = person
    this.setState({ people: people})
  }

  togglePeopleHandler = () => {
    const showing = this.state.showPeople
    this.setState({ showPeople: !showing })
  }

  deletePersonHandler = (personIndex) => {
    const people = [...this.state.people]
    people.splice(personIndex, 1)
    this.setState({ people: people})
  }

  displayTextHandler = (event) => {
    const displayedText = event.target.value
    this.setState({ textToValidate: displayedText })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px light gray',
      padding: '8px',
      cursor: 'pointer'
    }

    let people = null

    if ( this.state.showPeople ) {
      people = (
        <div>
          {
            this.state.people.map((person, index) => {
              return <Person
                click={ () => this.deletePersonHandler(index) }
                name={ person.name }
                age={ person.age }
                key={ person.id }
                changed={ (event) => this.nameChangedhandler(event, person.id) } />
            })
          }
        </div>
      )
    }

    let message = ''

    if ( this.state.textToValidate.length <= 0 ) {
      message
    } else if ( this.state.textToValidate.length < 5 ) {
      message = 'Too short, boy!'
    } else {
      message = 'Long enough, fella!'
    }

    return (
      <div className="App">
        <h1>Hi! I'm a React App</h1>
        <button
          id="button"
          style={style}
          onClick={ this.togglePeopleHandler }> Show People </button>
        { people }
        <p> Type some text to know its length: </p>
        <p>
          <input type="text" onChange={this.displayTextHandler} />
        </p>
        <Validation
          length={ this.state.textToValidate.length }/>
          { message }
      </div>
    )
  }
}

export default App


// Functional approach below (with setState() hook example):

// import React, { Component, useState } from 'react'
// import Person from './Person/Person'
// import './App.css'
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
//   )
// }
//
//
// export default app
//
