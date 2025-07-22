"use client"

import React, { useState } from 'react'
import { Button, Snackbar } from 'archi-ui'

const AutohideSnackbar = () => {

  const [open, setOpen] = useState(false)

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
        message='This snackbar will be dismissed in 5 seconds'
        onClose={handleClose}
        autoHideDuration={5000}
      />
    </div>
  )
}

export default AutohideSnackbar