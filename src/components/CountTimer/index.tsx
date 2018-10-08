import * as React from 'react'
import * as classNames from 'classnames/bind'
import * as styles from './index.styl'

const cx = classNames.bind(styles)

interface CountTimerCheckProps {
  show: boolean,
  time?: number,
}

const initialState = {
  show: false,
  time: 5,
}

type State = Readonly<typeof initialState>

class CountTimer extends React.Component<CountTimerCheckProps, State> {

  static readonly defaultProps: CountTimerCheckProps = {
    show: false,
    time: 5,
  }

  timer: any = undefined

  readonly state: State = initialState

  componentWillReceiveProps(nextProps: CountTimerCheckProps) {
    const { show, time = 5 } = nextProps
    this.setState({
      show,
      time,
    })
    if (show) { // 开始
      this.setIntervalTime()
    } else {
      this.clearIntervalTime()
    }
  }

  componentWillUnmount() {
    this.clearIntervalTime()
  }

  setIntervalTime() {
    if (this.timer !== undefined) {
      return
    }
    this.timer = setInterval(() => {
      if (this.state.time === 0) {
        this.setState({
          show: false,
        })
        this.clearIntervalTime()
        return
      }
      this.setState({
        time: this.state.time - 1,
      })
    }, 1000)
  }

  clearIntervalTime() {
    clearInterval(this.timer)
    this.timer = undefined
  }

  preveentHandle = (evt: React.MouseEvent<HTMLElement>) => {
    evt.stopPropagation()
    evt.preventDefault()
  }

  render() {
    return (
      <div onClick={this.preveentHandle} className={cx('counttimer', this.state.show ? 'counttimer__show' : '')}>
        <div className={cx('counttimer__mask')} />
        <div className={cx('counttimer__main')}>{this.state.time}</div>
      </div>
    )
  }
}

export default CountTimer
