import React, { useEffect } from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect')
    setTimeout(() => {
      alert('useEffect is in use!')
    }, 1000)
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect')
    }
  }, [])

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect')
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect')
    }
  })

  const assignedClasses = []
  let btnClass = ''

  if (props.showPeople) { btnClass = classes.red }
  if (props.peopleLength <= 9) { assignedClasses.push(classes.green) }
  if (props.peopleLength <= 5) { assignedClasses.push(classes.yellow) }
  if (props.peopleLength <= 2) { assignedClasses.push(classes.red) }

  return (
    <div className={classes.Cockpit}>
      <h1> {props.title} </h1>
      <p className={assignedClasses.join(' ')}>
        People Number: { props.peopleLength }
      </p>
      <button
        className={btnClass}
        onClick={ props.clicked }> Show People
      </button>
    </div>
  )
}

export default React.memo(cockpit)
