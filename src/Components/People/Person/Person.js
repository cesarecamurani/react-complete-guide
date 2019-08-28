import React, { Component} from 'react'
import Aux from '../../../HOC/Aux.js'
import classes from './Person.css'

class Person extends Component {
  render() {
    console.log('[Person.js] Person')
    return (
      <Aux>
      <div className={classes.Person}>
        <p onClick={this.props.click}> I'm {this.props.name} and I'm {this.props.age} years old! My Hobby is {this.props.children} </p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </div>
      </Aux>
    )
  }
}

export default Person
