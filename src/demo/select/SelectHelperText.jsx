"use client"

import React, { useState } from 'react'
import { FormControl, FormHelperText, MenuItem, Select } from 'archi-ui';

const SelectHelperText = () => {

  const [age, setAge] = useState('');
    
  const handleChange = (value) => {
    setAge(value)
  }

  return (
    <div className='flex items-center justify-center'>
      <FormControl>
        <Select value={age} onValueChange={handleChange}>
          <MenuItem divider value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem divider value='10'>Ten</MenuItem>
          <MenuItem divider value='20'>Twenty</MenuItem>
          <MenuItem divider value='30'>Thirty</MenuItem>
          <MenuItem divider value='40'>Fourty</MenuItem>
        </Select>
        <FormHelperText>Helper text</FormHelperText>
      </FormControl>
    </div>
  )
}

export default SelectHelperText
