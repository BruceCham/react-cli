import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import * as API from '@/server'
import {
  INCREMENT,
  INCREMENT_ASYNC,
  INCREMENT_ASYNC_ONCE
} from '@/const/actions'

// 一个工具函数：返回一个 Promise，这个 Promise 将在 1 秒后 resolve
// const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

// Our worker Saga: 将异步执行 increment 任务
export function * incrementAsync () {
  yield delay(1000)
  // put相当于封装后的dispatch函数
  yield put({ type: INCREMENT })
  let Promise = yield API.getSceneInfo( 123 )
  console.log( Promise )
}

function * watchIncrementAsyncSaga () {
  // 监听每一次，每次触发都会执行
  yield takeEvery(INCREMENT_ASYNC, incrementAsync)
}

function * watchIncrementAsyncOnceSaga () {
  // 同时触发多次时候，只执行最后一次最新的
  yield takeLatest(INCREMENT_ASYNC_ONCE, incrementAsync)
}

function * helloSaga () {
  console.log('hello saga')
}

export default function * rootSaga () {
  yield all([
    helloSaga(),
    watchIncrementAsyncSaga(),
    watchIncrementAsyncOnceSaga()
  ])
}
