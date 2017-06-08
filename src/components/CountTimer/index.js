import React from 'react'
import pureRender from 'pure-render-decorator'
import classNames from 'classnames/bind'
import styles from './index.css?l'

let cx = classNames.bind(styles)

class CountTimer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false,
      time: 5
    }
  }
  setIntervalTime () {
    let self = this
    if (this.timer !== void 0) {
      return
    }
    self.timer = setInterval(() => {
      if (self.state.time === 0) {
        self.setState({
          show: false
        })
        self.callback && self.callback()
        self.clearIntervalTime()
        return
      }
      self.setState({
        time: self.state.time - 1
      })
    }, 1000)
  }

  clearIntervalTime () {
    clearInterval(this.timer)
    this.timer = void 0
  }

  componentWillReceiveProps (nextProps) {
    let {show, timer = 5, callback} = nextProps
    this.callback = callback
    this.setState({
      show,
      time: timer
    })
    if (show) { // 开始
      this.setIntervalTime()
    } else {
      this.clearIntervalTime()
    }
  }

  componentWillUnmount () {
    this.clearIntervalTime()
  }
  preveentHandle (evt) {
    evt.stopPropagation()
    evt.preventDefault()
  }
  render () {
    console.log('render counttimer component')
    return (
      <div onClick={this.preveentHandle.bind(this)} className={cx('counttimer', this.state.show ? 'counttimer__show' : '')}>
        <div className={cx('counttimer__mask')} />
        <div className={cx('counttimer__main')}>{this.state.time}</div>
      </div>
    )
  }
}

export default pureRender(CountTimer)
