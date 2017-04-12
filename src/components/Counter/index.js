import React, { Component } from 'react';

export default class Counter extends Component {
    render() {
        let { value, onIncrement, onDecrement, onIncrementAsync, onIncrementAsyncOnce } = this.props
        return ( 
          <div>
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
              {' '} 
            <button onClick={onIncrementAsyncOnce}>
              IncrementAsyncOnce 
            </button> 
            <hr/>
            <div>Clicked: {value}times</div>
          </div> 
          )
    }
}
