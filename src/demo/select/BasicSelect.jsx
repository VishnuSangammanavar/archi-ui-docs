"use client"

import React, { useState } from 'react'
import { MenuItem, Select } from 'archi-ui'

const BasicSelect = () => {

  const [age, setAge] = useState('');

  const handleChange = (value) => {
    setAge(value)
  }

  return (
    <div className='flex items-center justify-center'>
      <Select value={age} onValueChange={handleChange}>
        <MenuItem divider value={10}>Ten</MenuItem>
        <MenuItem divider value={20}>Twenty</MenuItem>
        <MenuItem divider value={30}>Thirty</MenuItem>
        <MenuItem divider value={40}>Fourty</MenuItem>
      </Select>
    </div>
  )
}

export default BasicSelect
