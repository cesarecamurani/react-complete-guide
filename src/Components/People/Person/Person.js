import React, { Component} from 'react'
import classes from './Person.css'
import Aux from '../../../HOC/Aux.js'
import withClass from '../../../HOC/withClass.js'
import PropTypes from 'prop-types'

class Person extends Component {
  render() {
    console.log('[Person.js] Person')
    return (
      <Aux>
        <p onClick={this.props.click}> I'm {this.props.name} and I'm {this.props.age} years old! My Hobby is {this.props.children} </p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </Aux>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.string,
  changed: PropTypes.func
}

export default withClass(Person, classes.Person)
