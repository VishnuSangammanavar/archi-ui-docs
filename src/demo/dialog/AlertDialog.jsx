"use client"

import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from 'archi-ui'

const AlertDialog = () => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  }

  const handleCLose = () => {
    setOpen(false);
  }

  return (
    <div className='flex items-center justify-center'>
      <Button variant='filled' onClick={handleClick}>Open alert dialog</Button>
      <Dialog open={open} onClose={handleCLose}>
        <DialogTitle>Use Google's location services?</DialogTitle>
        <DialogContent>
          Let Google help apps detemine location. This means sening anonymous location data to Google, even no apps are running.
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCLose}>Disagree</Button>
          <Button onClick={handleCLose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AlertDialog
