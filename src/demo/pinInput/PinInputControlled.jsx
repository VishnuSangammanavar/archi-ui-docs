"use client"

import React, { useState } from 'react'
import { PinInput } from 'archi-ui'

const PinInputControlled = () => {

  const [pinValue, setPinValue] = useState('');

  const handlePinChange = (value) => {
    setPinValue(value);
  };

  return (
    <div className='flex items-center justify-center'>
      <PinInput
        length={4}
        value={pinValue}
        onChange={handlePinChange}
      />
    </div>
  )
}

export default PinInputControlled
