"use client"

import React, { useState } from 'react'
import { FormControl, FormHelperText, MenuItem, Select } from 'archi-ui';

const SelectProp = () => {

  const [age, setAge] = useState('');
    
  const handleChange = (value) => {
    setAge(value)
  }
  
  return (
    <div className='flex flex-wrap items-center justify-center gap-2'>
      <FormControl disabled>
        <Select value={age} onValueChange={handleChange}>
          <MenuItem divider value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem divider value={10}>Ten</MenuItem>
          <MenuItem divider value={20}>Twenty</MenuItem>
          <MenuItem divider value={30}>Thirty</MenuItem>
          <MenuItem divider value={40}>Fourty</MenuItem>
        </Select>
        <FormHelperText>Disabled</FormHelperText>
      </FormControl>
      <FormControl error>
        <Select value={age} onValueChange={handleChange}>
          <MenuItem divider value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem divider value={10}>Ten</MenuItem>
          <MenuItem divider value={20}>Twenty</MenuItem>
          <MenuItem divider value={30}>Thirty</MenuItem>
          <MenuItem divider value={40}>Fourty</MenuItem>
        </Select>
        <FormHelperText>Error</FormHelperText>
      </FormControl>
      <FormControl>
        <Select value={age} readOnly onValueChange={handleChange}>
          <MenuItem divider value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem divider value={10}>Ten</MenuItem>
          <MenuItem divider value={20}>Twenty</MenuItem>
          <MenuItem divider value={30}>Thirty</MenuItem>
          <MenuItem divider value={40}>Fourty</MenuItem>
        </Select>
        <FormHelperText>Read only</FormHelperText>
      </FormControl>
      <FormControl required>
        <Select value={age} onValueChange={handleChange}>
          <MenuItem divider value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem divider value={10}>Ten</MenuItem>
          <MenuItem divider value={20}>Twenty</MenuItem>
          <MenuItem divider value={30}>Thirty</MenuItem>
          <MenuItem divider value={40}>Fourty</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
    </div>
  )
}

export default SelectProp
