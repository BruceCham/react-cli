import * as React from 'react'
import { connect } from 'react-redux'
import SimpleForm from 'components/SimpleForm'

const showResults = (values: any) =>
  new Promise(resolve => {
    setTimeout(() => {
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      resolve()
    }, 500)
  })

class FormContainer extends React.Component {
  render () {
    return (
      <SimpleForm onSubmit={showResults}/>
    )
  }
}

export default connect( )(FormContainer as any)
