import React from 'react'
import { Field, reduxForm } from 'redux-form'
import classNames from 'classnames/bind'
import styles from './index.styl'

const cx = classNames.bind(styles)

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error },
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span className={cx('error')}>{error}</span>}
    </div>
  </div>
)

class SimpleForm extends React.Component {
  render() {
    const {
      error,
      handleSubmit,
      pristine,
      reset,
      submitting,
      onSubmit,
    } = this.props
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name='username'
          type='text'
          component={renderField}
          label='用户名'
        />
        <Field
          name='password'
          type='password'
          component={renderField}
          label='密码'
        />
        {error && <div className={cx('error')}>{error}</div>}
        <div>
          <button className={cx('btn')} type='submit' disabled={submitting}>提交</button>
          <button className={cx('btn')} type='button' disabled={pristine || submitting} onClick={reset}>重置</button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'submitValidation',
})(SimpleForm)
