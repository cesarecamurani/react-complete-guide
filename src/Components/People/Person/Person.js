import React, { Component} from 'react'
import classes from './Person.css'
import Aux from '../../../HOC/Aux.js'
import withClass from '../../../HOC/withClass.js'
import PropTypes from 'prop-types'
import AuthContext from '../../../context/auth-context'

class Person extends Component {
  constructor(props) {
    super(props)
    this.inputElementRef = React.createRef()
  }

  static contextType = AuthContext

  componentDidMount () {
    // this.inputElement.focus()
    this.inputElementRef.current.focus()
  }

  render() {
    console.log('[Person.js] Person')
    return (
      <Aux>(
        {this.context.authenticated ? (
          <p> Authenticated! </p>
        ) : (
          <p> Please log in! </p>
        )}
        <p onClick={this.props.click}> I'm {this.props.name} and I'm {this.props.age} years old! My Hobby is {this.props.children} </p>
        <input 
          // ref={(inputEl) => this.inputElement = inputEl}
          ref={this.inputElementRef}
          type="text" 
          onChange={this.props.changed} 
          value={this.props.name}/>
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
