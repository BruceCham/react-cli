import React, {Component} from 'react'
import { Link, NavLink } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './index.styl'
let cx = classNames.bind(styles)

class App extends Component {
  render () {
    return (
      <div className={cx('app-p-box')}>
        <h1>React Router Saga</h1>
        <div>
          <Link to='/home'>首页</Link>
          {' '}
          <NavLink to='/counter'>计数页面</NavLink>
          {' '}
          <Link to='/other'>Not Found</Link>
        </div>
        <br />
        {this.props.children}
      </div>
    )
  }
}

export default App
