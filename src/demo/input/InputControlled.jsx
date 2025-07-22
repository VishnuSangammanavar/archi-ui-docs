"use client"

import React, { useState } from 'react'
import { Input } from 'archi-ui';

const InputControlled = () => {

  const [value, setValue] = useState('');
  
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Input type="text" placeholder='Controlled' value={value} onChange={handleChange} />
      <Input type="text" placeholder='Uncontrolled' defaultValue='foo' />
    </div>
  )
}

export default InputControlled
