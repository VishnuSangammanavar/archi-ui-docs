"use client"

import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from 'archi-ui';
import { XIcon } from 'lucide-react';

const CustomizeDialog = () => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  }

  const handleCLose = () => {
    setOpen(false);
  }
  
  return (
    <div className='flex items-center justify-center'>
      <Button variant='filled' onClick={handleClick}>Open dialog</Button>
      <Dialog open={open} onClose={handleCLose}>
        <DialogTitle>Dialog title</DialogTitle>
        <IconButton onClick={handleCLose} className='absolute right-4 top-4'>
          <XIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi reiciendis nihil pariatur explicabo doloribus tempore, rem quaerat, assumenda minima est exercitationem delectus dicta suscipit, quidem fugiat consectetur quod officia eos.</Typography>
          <Typography gutterBottom>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi reiciendis nihil pariatur explicabo doloribus tempore, rem quaerat, assumenda minima est exercitationem delectus dicta suscipit, quidem fugiat consectetur quod officia eos.</Typography>
          <Typography gutterBottom>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi reiciendis nihil pariatur explicabo doloribus tempore, rem quaerat, assumenda minima est exercitationem delectus dicta suscipit, quidem fugiat consectetur quod officia eos.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCLose}>Save changes</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default CustomizeDialog