import React, { useEffect, useContext } from 'react'
import classes from './Cockpit.css'
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
  const authContext = useContext(AuthContext)
  
  useEffect(() => {
    console.log('[Cockpit.js] useEffect')
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
      <button onClick={authContext.login}>Log in</button>
    </div>
  )
}

export default React.memo(cockpit)
