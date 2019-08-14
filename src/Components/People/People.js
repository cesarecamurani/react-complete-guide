import React, { Component } from 'react'
import Person from './Person/Person'

class People extends Component {
  render() {
    console.log('[People.js] People')
    return this.props.people.map((person, index) => {
      return (
        <Person
          click={ () => this.props.clicked(index) }
          name={ person.name }
          age={ person.age }
          key={ person.id }
          changed={ (event) => this.props.changed(event, person.id) }
        />
      )
    })
  }
}

export default People
