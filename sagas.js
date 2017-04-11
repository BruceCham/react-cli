import { delay,takeEvery } from 'redux-saga'
import { put } from 'redux-saga/effects'

// 一个工具函数：返回一个 Promise，这个 Promise 将在 1 秒后 resolve
// const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

// Our worker Saga: 将异步执行 increment 任务
function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

function* watchIncrementAsync() {
  yield* takeEvery('INCREMENT_ASYNC', incrementAsync)
}

function* helloSaga(){
  console.log('hello saga')
}

export default function * rootSaga () {
  yield [
    helloSaga(),
    watchIncrementAsync()
  ]
}