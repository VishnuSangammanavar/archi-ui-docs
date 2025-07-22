import React from 'react'
import { Switch } from 'archi-ui'

const IconSwitch = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Switch color='info' variant='standard' icon='l' checkedIcon='d' />
    </div>
  )
}

export default IconSwitch