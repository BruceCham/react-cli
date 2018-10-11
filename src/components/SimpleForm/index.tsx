import * as React from 'react'
import { Field, reduxForm, WrappedFieldProps, InjectedFormProps } from 'redux-form'
import * as classNames from 'classnames/bind'
import * as styles from './index.styl'

const cx = classNames.bind(styles)

type TextInputProps = {
  label: string,
  type: string,
  className?: string,
} & WrappedFieldProps

const TextInput: React.StatelessComponent<TextInputProps> = ({ className, input, label, type, meta: { touched, error }, ...otherProps }) => {
  return (
    <div className={className} {...otherProps}>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span className={cx('error')}>{error}</span>}
      </div>
    </div>
  )
}

type SimpleFormCheckProps = {
  error?: string,
  onSubmit: any,
} & InjectedFormProps

class SimpleForm extends React.Component<SimpleFormCheckProps, any > {
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
      <div>
        {error && <h3 className={cx('error')}>{error}</h3>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field
            name='username'
            type='text'
            component={TextInput}
            label='用户名'
            className={cx('item')}
          />
          <Field
            name='password'
            type='password'
            component={TextInput}
            label='密码'
            className={cx('item')}
          />
          <div>
            <button className={cx('btn')} type='submit' disabled={submitting}>提交</button>
            <button className={cx('btn')} type='button' disabled={pristine || submitting} onClick={reset}>重置</button>
          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'submitValidation',
})(SimpleForm as any)
