import * as React from 'react'
import { connect } from 'react-redux'
import RadarChart from 'components/RadarChart'

const testData = [
  {
    name: '北丐',
    score: 78,
  },
  {
    name: '东邪',
    score: 77,
  },
  {
    name: '南帝',
    score: 85,
  },
  {
    name: '西狂',
    score: 72,
  },
]
class HomeContainer extends React.Component<any, {}, any> {
  componentDidMount() {
    RadarChart(this.refs.radarChart as HTMLDivElement, testData)
  }

  render () {
    return (
      <div>
        <p>首页内容 ~ ^.^ ~</p>
        <div ref='radarChart' />
      </div>
    )
  }
}
export default connect()(HomeContainer)
