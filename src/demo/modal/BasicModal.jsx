"use client"

import React, { useState } from 'react'
import { Button, Modal, Typography } from 'archi-ui'

const BasicModal = () => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className='flex items-center justify-center'>
      <Button variant='filled' onClick={handleClick}>Open Modal</Button>
      <Modal open={open} onClose={handleClose}>
        <Typography variant='h2'>This is Modal</Typography>
        <Typography className="mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam culpa aliquam aperiam commodi ullam iure laboriosam animi magni asperiores. Rem ratione odit explicabo ut eveniet illo eum dicta reprehenderit unde.</Typography>
      </Modal>
    </div>
  )
}

export default BasicModal