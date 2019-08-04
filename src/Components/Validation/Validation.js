import React from 'react'

const validation = (props) => {
  let message = ''

  if ( props.length === 0 ) {
    message = ''
  } else if ( props.length < 5 ) {
    message = ( <p> Too short, kiddo! </p> )
  } else {
    message = ( <p> Now it's long enough, dude! </p> )
  }

  return (
    <div className="Validation">
      <p> { props.length } </p>
      { message }
    </div>
  )
}

export default validation
