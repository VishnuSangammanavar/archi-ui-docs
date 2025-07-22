import React from 'react'
import { Checkbox } from 'archi-ui'

const CheckboxColor = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Checkbox defaultChecked color='primary'  />
      <Checkbox defaultChecked color='secondary' />
      <Checkbox defaultChecked color='info' />
      <Checkbox defaultChecked color='warning' />
      <Checkbox defaultChecked color='success' />
      <Checkbox defaultChecked color='error' />
    </div>
  )
}

export default CheckboxColor
