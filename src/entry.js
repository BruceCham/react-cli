import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { AppContainer } from 'react-hot-loader'

import rootSaga from '@/saga'
import reducer from '@/reducers'
import routers from '@/routers'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
let sagaTask = sagaMiddleware.run(function * () {
  yield rootSaga()
})

const render = Component => {
  ReactDOM.render(
    <AppContainer key={Math.random()}>
      <Provider store={store}>{Component}</Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}

render(routers)

// 热替换代码
if (module.hot) {
  module.hot.accept('./routers', () => {
    const nextRoutes = require('./routers').default
    render(nextRoutes)
  })
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
  module.hot.accept('./saga', () => {
    const nextRootSaga = require('./saga').default
    sagaTask.cancel()
    sagaTask.done.then(() => {
      sagaTask = sagaMiddleware.run(function * replacedSaga (action) {
        yield nextRootSaga()
      })
    })
  })
}
