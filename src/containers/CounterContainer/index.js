import React from 'react'
import { connect } from 'react-redux'
import Counter from '@/components/Counter'
import CountTimer from '@/components/CountTimer'
import {
  INCREMENT,
  DECREMENT,
  INCREMENT_ASYNC,
  INCREMENT_ASYNC_ONCE
} from '@/const/actions'
import {CT_SHOW_REQUEST} from '@/const/countTimer'

class counterContainer extends React.Component {
  render () {
    const {onIncrement, onDecrement, onIncrementAsync, onIncrementAsyncOnce} = this.props
    const {onShowCountTimer} = this.props
    let {counter, countTimer} = this.props
    return (
      <div>
        <Counter {...{onIncrement, onDecrement, onIncrementAsync, onIncrementAsyncOnce, counter}} />
        <button onClick={onShowCountTimer}>点击显示</button>
        <CountTimer show={countTimer.show} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    countTimer: state.countTimer
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
    },
    onShowCountTimer () {
      dispatch({
        type: CT_SHOW_REQUEST
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(counterContainer)
