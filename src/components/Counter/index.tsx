import * as React from 'react'

export interface CounterCheckProps {
  counter: number,
  onDecrement: (event: any) => void,
  onIncrement: (event: any) => void,
  onIncrementAsync: (event: any) => void,
  onIncrementAsyncOnce: (event: any) => void,
  onProxyWeather: (event: any) => void, 
}

class Counter extends React.Component<CounterCheckProps, {}> {

  render() {
    console.log('render count component')
    const {
      counter,
      onIncrement,
      onDecrement,
      onIncrementAsync,
      onIncrementAsyncOnce,
      onProxyWeather,
    } = this.props
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
        <button onClick={onProxyWeather}>代理方式获取iKcamp信息</button>
        <hr />
        <div>Clicked: <span style={{ fontSize: '20px', color: 'red' }}> {counter} </span>times</div>
      </div>
    )
  }
}

export default Counter
