import * as React from 'react'
import { Link, NavLink } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './index.styl'

const cx = classNames.bind(styles)
class App extends React.Component {
  render() {
    return (
      <div className={cx('app-p-box')}>
        <h1>React Router Saga :)</h1>
        <div>
          <Link to='/home' replace>首页</Link>
          {' '}
          <NavLink to='/counter' replace activeClassName='selected' activeStyle={{ color: 'red' }}>计数页面</NavLink>
          {' '}
          <Link to='/form' replace>表单提交</Link>
          {' '}
          <Link to='/other' replace>Not Found</Link>
        </div>
        <br />
        {this.props.children}
      </div>
    )
  }
}

export default App
