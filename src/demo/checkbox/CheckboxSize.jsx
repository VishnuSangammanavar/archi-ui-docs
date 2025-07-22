import React from 'react'
import { Checkbox } from 'archi-ui'

const CheckboxSize = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex items-center justify-center gap-2">
        <Checkbox defaultChecked color='primary' size='lg' />
        <Checkbox defaultChecked color='primary' size='md' />
        <Checkbox defaultChecked color='primary' size='sm' />
      </div>
      <div className="flex items-center justify-center gap-2">
        <Checkbox defaultChecked color='secondary' size='lg' />
        <Checkbox defaultChecked color='secondary' size='md' />
        <Checkbox defaultChecked color='secondary' size='sm' />
      </div>
    </div>
  )
}

export default CheckboxSize
