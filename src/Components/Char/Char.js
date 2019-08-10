import React from 'react'
import classes from './Char.css'

const char = (props) => {
  return (
    <div className={classes.Char} onClick={props.clicked}>
      <p>
        {props.character}
      </p>
    </div>
  )
}

export default char
