"use client"

import React, { useState } from 'react'
import { Button, Snackbar } from 'archi-ui'

const ActionSnackbar = () => {

  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div className='flex items-center justify-center'>
      <Button variant='filled' color='secondary' onClick={handleClick}>Upload data</Button>
      <Snackbar
        message="Uploaded successfully!"
        open={open}
        action={
          <React.Fragment>
            <Button color='secondary' size='sm' onClick={handleClose}>Undo</Button>
            <Button color='primary' size='sm' onClick={handleClose}>Cancle</Button>
          </React.Fragment>
        }
      />
    </div>
  )
}

export default ActionSnackbar