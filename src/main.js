import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas'
import Counter from './components/Counter/counter'
import reducer from './reducers/index'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run( rootSaga )


const action = type => store.dispatch({type})
console.log( store.getState() )
function render() {
  ReactDOM.render(
      <Counter
      value={store.getState().counter}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')} 
      onIncrementAsync={()=> action('INCREMENT_ASYNC')}
      onIncrementAsyncOnce={()=> action('INCREMENT_ASYNC_ONCE')}/>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
