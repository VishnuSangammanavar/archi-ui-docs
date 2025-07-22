"use client"

import React, { useState } from 'react'
import { Backdrop, Button, CircularProgress } from 'archi-ui'

const BasicBackdrop = () => {

  const [open, setOpen] = useState(false)
  
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    alert("You clicked on backdrop")
    setOpen(false)
  }

  return (
    <div className='flex items-center justify-center'>
      <Button onClick={handleOpen} variant='filled'>Show Backdrop</Button>
      <Backdrop open={open} onClick={handleClose}>
        <CircularProgress />
      </Backdrop>
    </div>
  )
}

export default BasicBackdrop