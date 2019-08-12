import React from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {
  const assignedClasses = []
  let btnClass = ''

  if (props.showPeople) { btnClass = classes.red }
  if (props.people.length <= 9) { assignedClasses.push(classes.green) }
  if (props.people.length <= 5) { assignedClasses.push(classes.yellow) }
  if (props.people.length <= 2) { assignedClasses.push(classes.red) }

  return (
    <div className={classes.Cockpit}>
      <h1> {props.title} </h1>
      <p className={assignedClasses.join(' ')}>
        People Number: { props.people.length }
      </p>
      <button
        className={btnClass}
        onClick={ props.clicked }> Show People
      </button>
    </div>
  )
}

export default cockpit
