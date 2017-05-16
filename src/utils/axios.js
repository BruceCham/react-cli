import axios from 'axios'

export default function (url, options) {
  // options = Object.assign({},options,{credentials: "include"})
  return axios(url, options).then((response) => {
    let {headers, data} = response
    let contentType = headers['content-type']
    if (contentType && contentType.indexOf('application/json') !== -1) {
      let {status, message} = data
      if (status !== 0) {
        return Promise.reject(new Error(message))
      }
      return Promise.resolve(data)
    } else {
      return Promise.reject(new Error('the response is not JSON'))
    }
  })
}
