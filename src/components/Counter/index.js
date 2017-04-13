import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
      super(props)
      this.clickHandle = this.clickHandle.bind(this)
    }
    clickHandle(){
      let { onIncrement } = this.props
      console.log('没毛病')
      onIncrement();
    }
    render() {
        let { value, onIncrement, onDecrement, onIncrementAsync, onIncrementAsyncOnce } = this.props
        return ( 
          <div>
            <button onClick={this.clickHandle}>
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
