const STATE = {
  firstName: 'Cham',
  lastName: 'Bruce',
  email: 'brucecham@qq.com',
}
export default function simpleForm(state = STATE, action: {type: string, payload: object}) {
  switch (action.type) {
    case 'SUBMIT':
      return Object.assign({}, state, action.payload)
    case 'RESET':
      return Object.assign({}, {}, state)
    default:
      return state
  }
}
