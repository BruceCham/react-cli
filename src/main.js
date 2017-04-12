import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas'
import reducer from './reducers/index'
import routers from './routers/index'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run( rootSaga )

ReactDOM.render(
    <Provider store={store}>
      {routers}
    </Provider>,
    document.getElementById('root')
  )
