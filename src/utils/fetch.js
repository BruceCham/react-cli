export default function (url, options) {
  const $options = Object.assign({}, options, { credentials: 'include' })
  return fetch(url, $options).then((response) => {
    const contentType = response.headers.get('content-type')
    if (contentType && contentType.indexOf('application/json') !== -1) {
      return response.json().then((data) => {
        if (data.status !== 0) {
          return Promise.reject(new Error(data.message))
        }
        return Promise.resolve(data)
      })
    }
    return Promise.reject(new Error('the response is not JSON'))
  })
}
