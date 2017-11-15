import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from '@/saga'
import reducer from '@/reducers/index'

export default function configureStore (initialState) {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  )
  let sagaTask = sagaMiddleware.run(function * () {
    yield rootSaga()
  })
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index').default
      store.replaceReducer(nextRootReducer)
    })
    module.hot.accept('../saga', () => {
      const newRootSaga = require('../saga').default
      sagaTask.cancel()
      sagaTask.done.then(() => {
        sagaTask = sagaMiddleware.run(function * replacedSaga (action) {
          yield newRootSaga()
        })
      })
    })
  }
  return store
}
