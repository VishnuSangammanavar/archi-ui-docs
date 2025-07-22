import React from 'react'
import { Switch } from 'archi-ui'

const SwitchVariant = () => {
  return (
    <div className='flex items-center justify-center gap-2'>
      <Switch variant='rounded' defaultChecked />
      <Switch variant='standard' defaultChecked />
    </div>
  )
}

export default SwitchVariant
