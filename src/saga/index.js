import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import * as API from '@/server'
import {
  INCREMENT,
  INCREMENT_ASYNC,
  INCREMENT_ASYNC_ONCE
} from '@/const/actions'
import {CT_SHOW, CT_HIDE, CT_SHOW_REQUEST} from '@/const/countTimer'

export function * incrementAsync () {
  yield delay(1000)
  yield put({ type: INCREMENT })
  let Promise = yield API.getSceneInfo(123)
  console.log(Promise)
}

function * watchIncrementAsyncSaga () {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync)
}

function * watchIncrementAsyncOnceSaga () {
  yield takeLatest(INCREMENT_ASYNC_ONCE, incrementAsync)
}

function * helloSaga () {
  console.log('hello saga')
}

function * setCountTimerShowRequest () {
  yield put({
    type: CT_SHOW
  })
  yield delay(5000)
  yield put({
    type: CT_HIDE
  })
}

function * setCountTimerShowRequestSaga () {
  yield takeLatest(CT_SHOW_REQUEST, setCountTimerShowRequest)
}

function * getProxyWeather () {
  let Promise = yield API.proxyWeather()
  console.log(Promise)
}

function * getProxyWeatherSaga () {
  yield takeLatest('GET_WEATHER_PROXY', getProxyWeather)
}

export default function * rootSaga () {
  yield all([
    helloSaga(),
    watchIncrementAsyncSaga(),
    watchIncrementAsyncOnceSaga(),
    setCountTimerShowRequestSaga(),
    getProxyWeatherSaga()
  ])
}
