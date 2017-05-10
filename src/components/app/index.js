import React, {Component} from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.css'
class App extends Component {
  render () {
    return (
      <div>
        <h1>React Router Saga</h1>
        <div>
          <Link to='/'>首页</Link>
          {' '}
          <NavLink to='/counter'>计数页面</NavLink>
          {' '}
          <Link to='/other'>开发中</Link>
        </div>
        <br />
        {this.props.children}
      </div>
    )
  }
}

export default App
