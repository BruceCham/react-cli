import * as React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

function HomeContainer() {
  return <div>首页内容 {'>*_*<'} </div>
}
export default withRouter(connect()(HomeContainer))
