/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react'

const Counter = (state) =>{
  let {value, onIncrement, onDecrement, onIncrementAsync} = state
  return (<div>
            <button onClick={onIncrement}>
              Increment
            </button>
            {' '}
            <button onClick={onDecrement}>
              Decrement
            </button>
            {' '}
            <button onClick={onIncrementAsync}>
              IncrementAsync
            </button>
            <hr />
            <div>
              Clicked: {value} times
            </div>
          </div>)
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter
