"use client"

import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select } from 'archi-ui';

const SelectDialog = () => {

  const [age, setAge] = useState('');
  const [open, setOpen] = useState(false)
    
  const handleChange = (value) => {
    setAge(value)
  }

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className='flex items-center justify-center'>
      <Button onClick={handleClick}>Open select dialog</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <div className='flex flex-wrap items-center justify-center gap-2'>
            <Select value={age} onValueChange={handleChange}>
              <MenuItem divider value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem divider value={10}>Ten</MenuItem>
              <MenuItem divider value={20}>Twenty</MenuItem>
              <MenuItem divider value={30}>Thirty</MenuItem>
              <MenuItem divider value={40}>Fourty</MenuItem>
            </Select>
            <Select value={age} onValueChange={handleChange}>
              <MenuItem divider value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem divider value={10}>Ten</MenuItem>
              <MenuItem divider value={20}>Twenty</MenuItem>
              <MenuItem divider value={30}>Thirty</MenuItem>
              <MenuItem divider value={40}>Fourty</MenuItem>
            </Select>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default SelectDialog