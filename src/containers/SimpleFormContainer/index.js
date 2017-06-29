import React from 'react'
import { connect } from 'react-redux'
import { SubmissionError } from 'redux-form'
import SimpleForm from '@/components/SimpleForm'
class FormContainer extends React.Component {
  render () {
    const { onSubmit } = this.props
    return (
      <SimpleForm onSubmit={onSubmit} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit (params) {
      return sleep(1000).then(() => {
        console.log('++++++++++++', params)
        const { username = '', password = '' } = params
        if (username !== 'bruce') {
          throw new SubmissionError({
            username: '用户名写死 bruce',
            _error: '表单信息有误，请查看'
          })
        } else if (password.length < 6) {
          throw new SubmissionError({
            password: '密码最少 6 位',
            _error: '表单信息有误，请查看'
          })
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer)
