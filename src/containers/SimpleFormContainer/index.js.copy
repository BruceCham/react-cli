import React from 'react'
import { Bundle } from 'utils'
import SimpleForm from 'bundle-loader?lazy!@/containers/SimpleFormContainer/simpleFormContainer'

const AsyncSimpleForm = () => (
  <Bundle load={SimpleForm}>
    {(AsyncSimpleForm) => <AsyncSimpleForm />}
  </Bundle>
)

export default AsyncSimpleForm
