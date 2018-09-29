import axios from 'axios'

export default function (options) {
  const DefaultParams = {
    url: '',
    method: 'get',
    credentials: 'include',
  }
  const $options = Object.assign({}, DefaultParams, options)
  return axios($options).then((response) => {
    const { headers, data } = response
    const contentType = headers['content-type']
    if (contentType && contentType.indexOf('application/json') !== -1) {
      return Promise.resolve(data)
    }
    return Promise.reject(new Error('the response is not JSON'))
  })
}
