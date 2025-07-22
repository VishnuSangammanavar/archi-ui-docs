"use client"

import React, { useState } from 'react'
import { Input } from 'archi-ui'
import { Eye, EyeOff, Phone } from 'lucide-react'

const InputLeadingTailingIcons = () => {

  const [inputType, setInputType] = useState(false);
  
  const handleInputTypeChange = () => {
    setInputType(!inputType);
  }

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Input type="text" leadingIcon={<Phone />} placeholder='Mobile number' variant='outlined' />
      <Input type={inputType ? "text" : "password"} placeholder='Password' variant='outlined' tailingIcon={inputType ? <Eye onClick={() => handleInputTypeChange()} className='cursor-pointer' /> : <EyeOff onClick={() => handleInputTypeChange()} className='cursor-pointer' />} />
      <Input type="text" leadingIcon={'$'} tailingIcon={'USD'} placeholder='0.00' variant='outlined' />
    </div>
  )
}

export default InputLeadingTailingIcons