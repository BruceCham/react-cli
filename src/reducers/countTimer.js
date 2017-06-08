const STATE = {
  show: false
}
export default function countTimer (state = STATE, action) {
  switch (action.type) {
    case 'CT_SHOW':
      return Object.assign({},state, {show: true})
    case 'CT_HIDE':
      return Object.assign({},state, {show: false})
    default:
      return state
  }
}