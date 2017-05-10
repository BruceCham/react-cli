import React from 'react'
import { connect } from 'react-redux'
import Counter from '@/components/Counter'

import {
  INCREMENT,
  INCREMENT_IF_ODD,
  DECREMENT,
  INCREMENT_ASYNC,
  INCREMENT_ASYNC_ONCE
} from '@/const/actions'


class counterContainer extends React.Component {
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
        type: INCREMENT
      })
    },
    onDecrement () {
      dispatch({
        type: DECREMENT
      })
    },
    onIncrementAsync () {
      console.log('onIncrementAsync 延时1秒增加')
      dispatch({
        type: INCREMENT_ASYNC
      })
    },
    onIncrementAsyncOnce () {
      console.log('onIncrementAsyncOnce 同时多次触发仅执行最后一次')
      dispatch({
        type: INCREMENT_ASYNC_ONCE
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(counterContainer)
