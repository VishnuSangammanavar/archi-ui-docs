"use client"

import React, { useState }  from 'react'
import { Switch } from 'archi-ui'

const ControlledSwitch = () => {

  const [checked, setChecked] = useState(true)

  const handleChange = (event) => {
    setChecked(event.target.checked)
  }

  return (
    <div className="flex items-center justify-center gap-2">
      <Switch checked={checked} onChange={handleChange} variant='standard' />
      <p>Switch is checked: {String(checked)}</p>
    </div>
  )
}

export default ControlledSwitch