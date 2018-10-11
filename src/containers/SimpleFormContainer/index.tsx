import * as React from 'react'
import { connect } from 'react-redux'
import { SubmissionError } from 'redux-form'
import SimpleForm from 'components/SimpleForm'

interface Params {
  username?: string,
  password?: string,
}
interface FormContainerCheckProps {
  onSubmit: (params: Params) => void,
}
class FormContainer extends React.Component<FormContainerCheckProps, {}> {
  render () {
    const { onSubmit } = this.props
    return (
      <SimpleForm onSubmit={onSubmit} />
    )
  }
}

interface StateCheck {
  counter: number
  [propName: string]: any
}

const mapStateToProps = (state: StateCheck) => {
  return {
    counter: state.counter,
  }
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const mapDispatchToProps = () => {
  return {
    onSubmit (params: Params) {
      return sleep(1000).then(() => {
        console.log('++++++++++++', params)
        const { username = '', password = '' } = params
        let errResult: { username?: string, password?: string, _error?: string } = {}
        if (username !== 'bruce') {
          errResult.username = '用户名写死 bruce'
          errResult._error = '表单信息有误，请查看'
        }
        if (password.length < 6) {
          errResult.password = '密码最少 6 位'
          errResult._error = '表单信息有误，请查看'
        }
        if(errResult._error) throw new SubmissionError(errResult)
        console.log('表单填空成功', params)
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer as any)
