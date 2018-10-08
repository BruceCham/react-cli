import { delay } from 'redux-saga'
import {
  put,
  takeEvery,
  takeLatest,
  all,
} from 'redux-saga/effects'
import API from 'server'
import ACTIONS from 'const/actions'
import COUNTTIMER from 'const/countTimer'

const {
  INCREMENT,
  INCREMENT_ASYNC,
  INCREMENT_ASYNC_ONCE,
} = ACTIONS
const {
  CT_SHOW,
  CT_HIDE,
  CT_SHOW_REQUEST,
} = COUNTTIMER

export function* incrementAsync() {
  yield delay(1000)
  yield put({ type: INCREMENT })
  let Promise = yield API.getSceneInfo(123)
  console.log(Promise)
}

function* watchIncrementAsyncSaga() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync)
}

function* watchIncrementAsyncOnceSaga() {
  yield takeLatest(INCREMENT_ASYNC_ONCE, incrementAsync)
}

function* helloSaga() {
  yield console.log('hello saga')
}

function* setCountTimerShowRequest() {
  yield put({
    type: CT_SHOW,
  })
  yield delay(5000)
  yield put({
    type: CT_HIDE,
  })
}

function* setCountTimerShowRequestSaga() {
  yield takeLatest(CT_SHOW_REQUEST, setCountTimerShowRequest)
}

function* getProxyGithubApi() {
  let Promise = yield API.proxyGithubApi()
  console.log(Promise)
}

function* getProxyGithubApiSaga() {
  yield takeLatest('GET_WEATHER_PROXY', getProxyGithubApi)
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsyncSaga(),
    watchIncrementAsyncOnceSaga(),
    setCountTimerShowRequestSaga(),
    getProxyGithubApiSaga(),
  ])
}
