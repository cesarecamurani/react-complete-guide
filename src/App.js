import React, { Component } from 'react'
import Person from './Components/Person/Person'
import Char from './Components/Char/Char'
import Validation from './Components/Validation/Validation'
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

    const style = {
      backgroundColor: 'green',
      color: 'white',
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
                changed={ (event) => this.nameChangehandler(event, person.id) } />
            })
          }
        </div>
      )
      style.backgroundColor = 'red'
    }

    const characters = this.state.userInput.split('').map((char, index) => {
      return <Char
                character={ char }
                key={ index }
                clicked={ () => this.deleteCharHandler(index) }/>
    })

    const assignedClasses = []
    if (this.state.people.length <= 9) { assignedClasses.push(classes.green) }
    if (this.state.people.length <= 5) { assignedClasses.push(classes.yellow) }
    if (this.state.people.length <= 2) { assignedClasses.push(classes.red) }

    return (
      <div className={classes.App}>
        <h1> Hi! I'm a React App </h1>
        <p className={assignedClasses.join(' ')}> People Number </p>
        <button
          id="button"
          style={style}
          onClick={ this.togglePeopleHandler }> Show People
        </button>
        { people }
        <p> Type some text to know its length: </p>
        <p>
          <input type="text"
            onChange={ this.displayTextHandler }
            value={ this.state.userInput} />
        </p>
        <Validation length={ this.state.userInput.length } />
        { characters }
      </div>
    )
  }
}

export default App
