import axios from 'axios'

export default function (options) {
  let DefaultParams = {
    url: '',
    method: 'get',
    credentials: 'include'
  }
  options = Object.assign({}, DefaultParams, options)
  try {
    return axios(options).then((response) => {
      let {headers, data} = response
      let contentType = headers['content-type']
      if (contentType && contentType.indexOf('application/json') !== -1) {
        // let {status, message} = data
        // 可对业务接口返回的约定状态值进行定制处理
        // if (status !== 0) {
        //   return Promise.reject(new Error(message))
        // }
        return Promise.resolve(data)
      } else {
        return Promise.reject(new Error('the response is not JSON'))
      }
    })
  } catch (e) {
    console.error('axios error: ', e)
  }
}
