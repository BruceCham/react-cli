import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import counter from './counter'
import countTimer from './countTimer'
/*
  直接引用counter作为reducer时候
    state = 0
  通过合并combineReducers函数处理后，以函数名包括一层
    state = {
      counter: 0
    }
*/

export default combineReducers({
  counter,
  countTimer,
  form
})
