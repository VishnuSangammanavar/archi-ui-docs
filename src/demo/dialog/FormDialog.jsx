"use client"

import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Input } from 'archi-ui';

const FormDialog = () => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  }

  const handleCLose = () => {
    setOpen(false);
  }

  return (
    <div className='flex items-center justify-center'>
      <Button variant='filled' onClick={handleClick}>Open form dialog</Button>
      <Dialog open={open} onClose={handleCLose}>
        <DialogTitle>Subscription</DialogTitle>
        <DialogContent>
          <p>To subscribe to this website, please enter your email address here. We will send updates occasionally.</p>
          <Input placeholder='Email address' fullwidth variant='standard' required autoFocus />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCLose}>Cancel</Button>
          <Button onClick={handleCLose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default FormDialog