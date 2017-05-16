export default function (url, options) {
  options = Object.assign({},options,{credentials: "include"})
  return fetch(url, options).then((response) => {
    let contentType = response.headers.get('content-type')
    if (contentType && contentType.indexOf('application/json') !== -1) {
      return response.json().then(function (data) {
        if (data.status !== 0) {
          return Promise.reject(new Error(data.message))
        }
        return Promise.resolve(data)
      })
    } else {
      return Promise.reject(new Error('the response is not JSON'))
    }
  })
}
