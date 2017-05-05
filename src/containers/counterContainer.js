import React, { Component } from 'react'
import { connect } from 'react-redux'
import Counter from '../components/Counter'

class counterContainer extends Component {
  render () {
    return (<Counter {...this.props} />)
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement () {
      dispatch({
        type: 'INCREMENT'
      })
    },
    onDecrement () {
      dispatch({
        type: 'DECREMENT'
      })
    },
    onIncrementAsync () {
      console.log('onIncrementAsync 延时1秒增加')
      dispatch({
        type: 'INCREMENT_ASYNC'
      })
    },
    onIncrementAsyncOnce () {
      console.log('onIncrementAsyncOnce 同时多次触发仅执行最后一次')
      dispatch({
        type: 'INCREMENT_ASYNC_ONCE'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(counterContainer)
