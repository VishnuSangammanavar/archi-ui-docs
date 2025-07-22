"use client"

import React, { useState } from 'react'
import { Button, IconButton, Snackbar } from 'archi-ui'
import { XIcon } from 'lucide-react';

const BasicSnackbar = () => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div className='flex items-center justify-center'>
      <Button variant='filled' onClick={handleClick}>open snackbar</Button>
      <Snackbar
        open={open}
        message='Note archived'
        onClose={handleClose}
        action={
          <React.Fragment>
            <Button color='secondary' size='sm' onClick={handleClose}>undo</Button>
            <IconButton onClick={handleClose} className='text-muted-foreground'>
              <XIcon />
            </IconButton>
          </React.Fragment>
        }
        autoHideDuration={6000}
      />
    </div>
  )
}

export default BasicSnackbar