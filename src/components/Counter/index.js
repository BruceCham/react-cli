import React, { Component } from 'react'
import pureRender from 'pure-render-decorator'

@pureRender
class Counter extends Component {
  constructor (props) {
    super(props)
    this.clickHandle = this.clickHandle.bind(this)
  }
  clickHandle () {
    let { onIncrement } = this.props
    console.log('没毛病')
    onIncrement()
  }
  render () {
    console.log('render count component')
    let { counter, onDecrement, onIncrementAsync, onIncrementAsyncOnce, onProxyWeather } = this.props
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
        <button onClick={onProxyWeather}>调用天气接口测试代理功能</button>
        <hr />
        <div>Clicked: <span style={{fontSize: '20px', color: 'red'}}> {counter} </span>times</div>
      </div>
    )
  }
}

export default Counter
