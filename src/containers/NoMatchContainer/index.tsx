import * as React from 'react'
import { connect } from 'react-redux'

function NoMatchContainer() {
  return <div>404!Not Found</div>
}
export default connect()(NoMatchContainer)
