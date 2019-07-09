import React from 'react';

const person = (props) => {
  return (
    <div>
      <p onClick={props.click}> I'm { props.name } and I'm { props.age } years old! My Hobby is { props.children } </p>
    </div>
  )
}

export default person;
