"use client"

import React, { useState } from 'react'
import { Button, Modal, Typography } from 'archi-ui'

const ChildModal = () => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <React.Fragment>
      <Button onClick={handleClick}>Open child modal</Button>
      <Modal open={open} onClose={handleClose} style={{ width: 250 }}>
        <Typography variant='h3'>Text in a child modal</Typography>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <Button onClick={handleClose}>Close child modal</Button>
      </Modal>
    </React.Fragment>
  )
}

const NestedModel = () => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className='flex items-center justify-center'>
      <Button onClick={handleClick}>Open modal</Button>
      <Modal open={open} onClose={handleClose}>
        <Typography variant='h3'>Text in a modal</Typography>
        <p>Ullam minus atque cum maiores recusandae reiciendis in sed rem voluptatem veniam harum repellendus.</p>
        <ChildModal />
      </Modal>
    </div>
  )
}

export default NestedModel
