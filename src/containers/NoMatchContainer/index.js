import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

class NoMatchContainer extends Component {
  render () {
    return (
      <div>404!Not Found</div>
    )
  }
}

export default withRouter(connect()(NoMatchContainer))
