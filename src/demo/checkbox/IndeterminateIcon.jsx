"use client"

import React, { useState } from 'react'
import { Checkbox, FormControl, Label } from 'archi-ui'

const IndeterminateIcon = () => {

  const [checked, setChecked] = useState([true, false]);

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };

  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <FormControl>
        <Checkbox
          checked={checked[0] && checked[1]}
          indeterminate={checked[0] !== checked[1]}
          onChange={handleChange1}
        />
        <Label htmlFor='parent'>Parent</Label>
      </FormControl>
      <div className="flex flex-col ml-4 gap-2">
        <FormControl>
          <Checkbox checked={checked[0]} onChange={handleChange2} />
          <Label htmlFor='parent'>Parent</Label>
        </FormControl>
        <FormControl>
          <Checkbox checked={checked[1]} onChange={handleChange3} />
          <Label htmlFor='parent'>Parent</Label>
        </FormControl>
      </div>
    </div>
  )
}

export default IndeterminateIcon
