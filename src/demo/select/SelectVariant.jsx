"use client"

import React, { useState } from 'react'
import { MenuItem, Select } from 'archi-ui'

const SelectVariant = () => {

  const [age, setAge] = useState('');
  
  const handleChange = (value) => {
    setAge(value)
  }
  
  return (
    <div className='flex items-center justify-center gap-2'>
      <Select value={age} onValueChange={handleChange} variant='filled'>
        <MenuItem divider value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem divider value='10'>Ten</MenuItem>
        <MenuItem divider value='20'>Twenty</MenuItem>
        <MenuItem divider value='30'>Thirty</MenuItem>
        <MenuItem divider value='40'>Fourty</MenuItem>
      </Select>
      <Select value={age} onValueChange={handleChange} variant='outlined'>
        <MenuItem divider value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem divider value='10'>Ten</MenuItem>
        <MenuItem divider value='20'>Twenty</MenuItem>
        <MenuItem divider value='30'>Thirty</MenuItem>
        <MenuItem divider value='40'>Fourty</MenuItem>
      </Select>
      <Select value={age} onValueChange={handleChange} variant='standard'>
        <MenuItem divider value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem divider value='10'>Ten</MenuItem>
        <MenuItem divider value='20'>Twenty</MenuItem>
        <MenuItem divider value='30'>Thirty</MenuItem>
        <MenuItem divider value='40'>Fourty</MenuItem>
      </Select>
    </div>
  )
}

export default SelectVariant
