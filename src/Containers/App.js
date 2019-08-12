import React, { Component } from 'react'
import Cockpit from '../Components/Cockpit/Cockpit'
import Person from '../Components/People/Person/Person'
import People from '../Components/People/People'
import Char from '../Components/Char/Char'
import Validation from '../Components/Validation/Validation'
import classes from './App.css'

class App extends Component {
  state = {
    people: [
      { id: 'zaq14', name: 'Cesare', age: '36'},
      { id: 'xsw25', name: 'Manu', age: '26'},
      { id: 'cde36', name: 'Luca', age: '30'},
      { id: 'p0o9i', name: 'Pippo', age: '32'},
      { id: '0p9o8', name: 'Gennaro', age: '28'},
      { id: 'mnbvc', name: 'Gino', age: '31'},
      { id: 'cdfvg', name: 'Pablo', age: '45'},
      { id: 'zxcvb', name: 'Baro', age: '23'},
      { id: 'zaxsc', name: 'Bande', age: '42'}
    ],
    showPeople: false,
    userInput: ''
  }

  // People handlers:

  nameChangehandler = (event, id) => {
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

  //  Char handlers:

  displayTextHandler = (event) => {
    this.setState({ userInput: event.target.value })
  }

  deleteCharHandler = (charIndex) => {
    const charsList = this.state.userInput.split('')
    charsList.splice(charIndex, 1)
    const updatedCharList = charsList.join('')
    this.setState({ userInput: updatedCharList})
  }

  render() {
    let people = null

    if ( this.state.showPeople ) {
      people = ( <People
        people={this.state.people}
        clicked={this.deletePersonHandler}
        changed={this.nameChangehandler}/>
      )
    }

    const characters = this.state.userInput.split('').map((char, index) => {
      return <Char
        character={ char.toUpperCase() }
        key={ index }
        clicked={ () => this.deleteCharHandler(index) }/>
    })

    return (
      <div className={classes.App}>
        <Cockpit
          people={this.state.people}
          clicked={this.togglePeopleHandler}
          showPeople={this.state.showPeople}
         />
        { people }
        <p> Type some text to know its length: </p>
        <p>
          <input type="text"
            onChange={ this.displayTextHandler }
            value={ this.state.userInput} />
        </p>
        Chars count: <Validation length={ this.state.userInput.length } />
        { characters }
      </div>
    )
  }
}

export default App
