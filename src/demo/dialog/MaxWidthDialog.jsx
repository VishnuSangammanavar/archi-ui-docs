"use client"

import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, MenuItem, Select, Switch, Typography } from 'archi-ui';

const MaxWidthDialog = () => {

  const [open, setOpen] = useState(false);
  const [maxWidth, setMaxWidth] = useState('sm')
  const [fullWidth, setFullWidth] = useState(false)
    
  const handleClick = () => {
    setOpen(true);
  }

  const handleCLose = () => {
    setOpen(false);
  }

  const handlMaxWidthChange = (value) => {
    setMaxWidth(value)
  }

  const handlFullWidthChange = (event) => {
    setFullWidth(event.target.checked)
  }

  return (
    <div className='flex items-center justify-center'>
      <Button variant='filled' onClick={handleClick}>Open dialog</Button>
      <Dialog open={open} fullwidth={fullWidth} maxwidth={maxWidth} onClose={handleCLose}>
        <DialogTitle>Optional sizes</DialogTitle>
        <DialogContent>
          <p>You can set my maximum width and whether to adapt or not.</p>
          <div className='flex flex-col items-center justify-center gap-4'>
            <FormControl>
              <Select value={maxWidth} autoFocus onValueChange={handlMaxWidthChange}>
                <MenuItem value='false'>false</MenuItem>
                <MenuItem value='xs'>xs</MenuItem>
                <MenuItem value='sm'>sm</MenuItem>
                <MenuItem value='md'>md</MenuItem>
                <MenuItem value='lg'>lg</MenuItem>
                <MenuItem value='xl'>xl</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <Switch variant='standard' checked={fullWidth} onChange={handlFullWidthChange} />
              <Typography>Full width</Typography>
            </FormControl>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCLose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default MaxWidthDialog