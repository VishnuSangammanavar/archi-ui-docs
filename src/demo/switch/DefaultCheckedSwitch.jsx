import React from 'react'
import { Switch } from 'archi-ui'

const DefaultCheckedSwitch = () => {
  return (
    <div className='flex items-center justify-center gap-2'>
      <Switch />
      <Switch defaultChecked />
      <Switch disabled />
      <Switch disabled defaultChecked />
    </div>
  )
}

export default DefaultCheckedSwitch
