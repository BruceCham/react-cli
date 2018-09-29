import * as React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

function NoMatchContainer() {
  return <div>404!Not Found</div>
}
export default withRouter(connect()(NoMatchContainer))
