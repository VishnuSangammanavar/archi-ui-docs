"use client"

import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from 'archi-ui';

const ScrollDialog = () => {

  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('inside');
    
  const handleClick = (scrollType) => {
    setOpen(true);
    setScroll(scrollType)
  }

  const handleCLose = () => {
    setOpen(false);
  }

  return (
    <div className='flex items-center justify-center gap-2'>
      <Button variant='filled' onClick={() => handleClick('inside')}>Scroll inside</Button>
      <Button variant='filled' onClick={() => handleClick('outside')}>Scroll outside</Button>
      <Dialog open={open} scroll={scroll} onClose={handleCLose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent dividers={scroll === 'inside'}>
          {[...new Array(50)].map(() => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, tempora cupiditate numquam non velit ipsam laboriosam aut harum doloribus aperiam nesciunt distinctio in corrupti sit vitae itaque omnis assumenda porro.',).join('\n')}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCLose}>Close</Button>
          <Button onClick={handleCLose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ScrollDialog
