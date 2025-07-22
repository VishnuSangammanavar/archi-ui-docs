"use client"

import React, { useState }  from 'react'
import { Checkbox } from 'archi-ui'

const Controlled = () => {

  const [check, setCheck] = useState(false);

  const handleCheck = () => {
    setCheck(!check)
  }

  return (
    <div className="flex items-center justify-center gap-2">
      <Checkbox checked={check} onChange={handleCheck} />
      <p>Checkbox is checked: {String(check)}</p>
    </div>
  )
}

export default Controlled
