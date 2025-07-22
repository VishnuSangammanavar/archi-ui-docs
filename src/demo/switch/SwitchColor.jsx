import React from 'react'
import { Switch } from 'archi-ui'

const SwitchColor = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Switch defaultChecked color='primary' variant='rounded'  />
        <Switch defaultChecked color='secondary' variant='rounded' />
        <Switch defaultChecked color='info' variant='rounded' />
        <Switch defaultChecked color='warning' variant='rounded' />
        <Switch defaultChecked color='success' variant='rounded' />
        <Switch defaultChecked color='error' variant='rounded' />
        <Switch defaultChecked color='default' variant='rounded' />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Switch defaultChecked color='primary' variant='standard' />
        <Switch defaultChecked color='secondary' variant='standard' />
        <Switch defaultChecked color='info' variant='standard' />
        <Switch defaultChecked color='warning' variant='standard' />
        <Switch defaultChecked color='success' variant='standard' />
        <Switch defaultChecked color='error' variant='standard' />
        <Switch defaultChecked color='default' variant='standard' />
      </div>
    </div>
  )
}

export default SwitchColor