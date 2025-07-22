"use client"

import React, { useState } from 'react'
import { Alert, AlertDescription, AlertTitle, Button, Snackbar } from 'archi-ui'

const AlertSnackbar = () => {

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
        autoHideDuration={6000}
      >
        <Alert severity='success' variant='filled' onClose={handleClose}>
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>This is success alert inside a snackbar!</AlertDescription>
        </Alert>
      </Snackbar>
    </div>
  )
}

export default AlertSnackbar