import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {
  BrowserRouter as Router,
  hashHistory
} from 'react-router-dom'

import rootSaga from './sagas'
import reducer from './reducers/index'
import routes from './routers/index'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run( rootSaga )

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={hashHistory} routes={routes} />
    </Provider>,
    document.getElementById('root')
  )
}

render()
// store.subscribe(render)
