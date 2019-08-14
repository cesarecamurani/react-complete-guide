import React, { Component } from 'react'
import Person from './Person/Person'

class People extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showPeople: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[People.js] getDerivedstatefromProps')
    return state
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[People.js] shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[People.js] getSnapshotBeforeUpdate')
    return { message: 'Snapshot!'}
  }

  componentDidUpdate(prevProps, prevStat, snapshot) {
    console.log('[People.js] componentDidUpdate')
    console.log(snapshot)
  }

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
