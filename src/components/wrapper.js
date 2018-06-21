import React from 'react'
export default function (WrappedComponent) {
  return class Wrapper extends WrappedComponent {
    render () {
      const ele = super.render()
      const eleProps = ele.props
      let newProps = {}
      console.log('brucecham', ele)
      if (ele && eleProps['data-testid'] === undefined) {
        newProps['data-testid'] = 'BC'
      }
      const props = Object.assign({}, eleProps, newProps)
      const newEle = React.cloneElement(ele, props, eleProps.children)
      return newEle
    }
  }
}
