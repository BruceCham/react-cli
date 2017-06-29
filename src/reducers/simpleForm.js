const STATE = {
  firstName: 'Cham',
  lastName: 'Bruce',
  email: 'brucecham@qq.com'
}
export default function simpleForm (state = STATE, action) {
  switch (action.type) {
    case 'SUBMIT':
      return Object.assign({}, state, action.payload)
    case 'RESET':
      return Object.assign({}, {}, state)
    default:
      return state
  }
}
