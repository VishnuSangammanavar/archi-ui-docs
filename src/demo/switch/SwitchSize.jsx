import React from 'react'
import { Switch } from 'archi-ui'

const SwitchSize = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex items-center justify-center gap-2">
        <Switch defaultChecked size='md' variant='rounded' />
        <Switch defaultChecked size='sm' variant='rounded' />
      </div>
      <div className="flex items-center justify-center gap-4">
        <Switch defaultChecked size='md' variant='standard' />
        <Switch defaultChecked size='sm' variant='standard' />
      </div>
    </div>
  )
}

export default SwitchSize
