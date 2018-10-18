import Raphael from 'raphael/raphael'
/**
 * 根据圆心、半径、角度得到元素的坐标
 * @param  {[type]} x0  [圆心x轴]
 * @param  {[type]} y0  [圆心y轴]
 * @param  {[type]} r   [半径]
 * @param  {[type]} deg [角度]
 * @return {[type]}     [点的坐标]
 */
function getLocationByDeg(deg, r, percent) {
  const x0 = 125
  const y0 = 125

  if (percent === 0) {
    r = 3
  } else {
    r = percent ? r * percent : r
  }

  const x1 = parseInt((x0 + r * Math.cos(deg * 3.14 / 180)).toFixed(0), 10)
  const y1 = parseInt((y0 + r * Math.sin(deg * 3.14 / 180)).toFixed(0), 10)

  return { x: x1, y: y1 }
}

function getDotsPosition(initParams) {
  // 所有外面标记点的坐标集合
  const outsideDots = []
  const outsideTextDots = []
  const insideDots = []
  const outLineDots = []
  const totalOutLineObj = {
    100: [],
    75: [],
    50: [],
    25: [],
  }
  const dotNums = initParams.length
  const deg = 360 / dotNums // 每个扇形所占的角度
  for (let i = 0; i < dotNums; i += 1) {
    outsideDots.push(getLocationByDeg(-90 + deg * i, 75))
    outsideTextDots.push(getLocationByDeg(-90 + deg * i, 96))
    insideDots.push(getLocationByDeg((-90 + deg * i), 69, (initParams[i].score) / 100))
    outLineDots.push(getLocationByDeg(-90 + deg * i, 69))
  }

  return {
    outsideDots,
    outsideTextDots,
    insideDots,
    outLineDots,
    totalOutLineObj,
  }
}

// 将内部的点连接起来并填充颜色
function drawPath(dots) {
  const { length } = dots
  let p = ['M']
  for (let i = 0; i < length; i += 1) {
    let dot = dots[i]
    p.push(dot.x, dot.y, 'L')
  }
  p = p.slice(0, -1)
  p.push('Z')
  return p
}

function fnDealRadarData(radarData) {
  radarData = radarData || []
  const returnArr = []

  const { length } = radarData
  for (let i = 0; i < length; i += 1) {
    returnArr.push({
      name: radarData[i].name,
      score: radarData[i].score,
    })
  }

  return returnArr
}
function getGradientDeg(i, dotLength) {
  return 360 - i * 360 / dotLength
}
const circleSvgStyle = {
  fill: 'none',
  // stroke: 'rgba(226, 230, 241, 0.4)',
  stroke: '#fff',
}
export default function drawRadarChart($dom, initParams) {
  initParams = fnDealRadarData(initParams)
  let paramsLength = initParams.length
  let colors = [
    '#f0658b',
    '#fc9a30',
    '#7e6efa',
    '#1bcdc9',
  ]

  for (let i = 0; i < paramsLength; i += 1) {
    initParams[i].color = colors[i % 4]
  }
  $dom.innerHTML = ''
  let paper = Raphael($dom, 250, 250)
  let st = paper.set()

  let dotLength = initParams.length
  let dotsPosition = getDotsPosition(initParams)
  let {
    outsideDots,
    outsideTextDots,
    insideDots,
    outLineDots,
  } = dotsPosition

  // 画背景圈(100%,75%,50%,25%)
  paper.circle(125, 125, 69).attr(circleSvgStyle)

  paper.circle(125, 125, 52).attr(circleSvgStyle)

  paper.circle(125, 125, 35).attr(circleSvgStyle)

  paper.circle(125, 125, 18).attr(circleSvgStyle)

  for (let i = 0; i < dotLength; i += 1) {
    // 画外部的点线文字
    let outsideDot = outsideDots[i]
    let outsideTextDot = outsideTextDots[i]
    let nameY = outsideTextDot.y
    let nameX = outsideTextDot.x
    let scoreY = outsideTextDot.y
    let scoreX = outsideTextDot.x

    if (nameY < 125) {
      nameY += 8
      scoreY -= 10
    } else if (nameY > 125) {
      scoreY -= 10
      nameY += 5
    } else if (nameY === 125) {
      scoreY -= 10
      nameY += 10
    }

    st.push(
      paper.path(`M${outLineDots[i].x},${outLineDots[i].y}L125,125`).attr({
        stroke: '#fff',
        'stroke-dasharray': ['- '],
      }),
      paper.circle(outsideDot.x, outsideDot.y, 3).attr({
        fill: initParams[i].color,
        stroke: initParams[i].color,
      }),
      paper.text(nameX, nameY, initParams[i].name).attr({
        'font-size': '12px',
        fill: initParams[i].color,
      }),
      paper.text(scoreX, scoreY, initParams[i].score / 20).attr({// 100分制转为5分制
        fill: initParams[i].color,
        'font-size': '14px',
      }),
    )
  }

  for (let i = 0; i < (dotLength - 1); i += 1) {
    const dots = []
    dots.push(insideDots[i])
    dots.push({ x: 125, y: 125 })
    dots.push(insideDots[i + 1])
    paper.path().attr({
      path: drawPath(dots),
      fill: `${getGradientDeg(i, dotLength)}-#fdba56-#fdcc5b`,
      'stroke-width': 0,
    })
  }

  const lastPathDot = []
  lastPathDot.push(insideDots[dotLength - 1])
  lastPathDot.push({ x: 125, y: 125 })
  lastPathDot.push(insideDots[0])
  paper.path().attr({
    path: drawPath(lastPathDot),
    fill: `${getGradientDeg(dotLength - 1, dotLength)}-#fdba56-#fdcc5b`,
    'stroke-width': 0,
  })
}
