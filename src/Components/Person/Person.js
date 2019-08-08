import React from 'react'
import Radium from 'radium'

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}> I'm { props.name } and I'm { props.age } years old! My Hobby is { props.children } </p>
      <input type="text" onChange={props.changed} value={ props.name }/>
    </div>
  )
}

export default Radium(person)
