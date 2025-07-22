"use client"

import React, { useState } from 'react'
import { MenuItem, Select } from 'archi-ui'

const SelectSize = () => {

  const [age, setAge] = useState('');
  
  const handleChange = (value) => {
    setAge(value)
  }

  return (
    <div className='flex items-center justify-center gap-2'>
      <Select value={age} onValueChange={handleChange} size='lg'>
        <MenuItem divider value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem divider value={10}>Ten</MenuItem>
        <MenuItem divider value={20}>Twenty</MenuItem>
        <MenuItem divider value={30}>Thirty</MenuItem>
        <MenuItem divider value={40}>Fourty</MenuItem>
      </Select>
      <Select value={age} onValueChange={handleChange} size='md'>
        <MenuItem divider value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem divider value={10}>Ten</MenuItem>
        <MenuItem divider value={20}>Twenty</MenuItem>
        <MenuItem divider value={30}>Thirty</MenuItem>
        <MenuItem divider value={40}>Fourty</MenuItem>
      </Select>
      <Select value={age} onValueChange={handleChange} size='sm'>
        <MenuItem divider value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem divider value={10}>Ten</MenuItem>
        <MenuItem divider value={20}>Twenty</MenuItem>
        <MenuItem divider value={30}>Thirty</MenuItem>
        <MenuItem divider value={40}>Fourty</MenuItem>
      </Select>
    </div>
  )
}

export default SelectSize