"use client"

import React, { useState } from 'react'
import { Button, IconButton, Snackbar } from 'archi-ui'
import { XIcon } from 'lucide-react';

const PlaceSnackbar = () => {

  const [state, setState] = useState({
    open: false,
    vertical: 'bottom',
    horizontal: 'left',
    message: '',
  });

  const { vertical, horizontal, open, message } = state;

  const handleClick = (newState) => {
    setState({...newState, open: true});
  }

  const handleClose = () => {
    setState({...state, open: false});
  }

  return (
    <React.Fragment>
      <div className='flex flex-col items-center justify-center gap-2'>
        <div className='flex flex-wrap items-center justify-center gap-2'>
          <Button variant='filled' color='primary' onClick={() => handleClick({vertical: 'bottom', horizontal: 'left', message: 'Bottom left'})}>Bottom left</Button>
          <Button variant='filled' color='secondary' onClick={() => handleClick({vertical: 'bottom', horizontal: 'center', message: 'Bottom center'})}>Bottom Center</Button>
          <Button variant='filled' color='info' onClick={() => handleClick({vertical: 'bottom', horizontal: 'right', message: 'Bottom right'})}>Bottom right</Button>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-2'>
          <Button variant='filled' color='warning' onClick={() => handleClick({vertical: 'top', horizontal: 'left', message: 'Top left'})}>Top left</Button>
          <Button variant='filled' color='success' onClick={() => handleClick({vertical: 'top', horizontal: 'center', message: 'Top center'})}>Top Center</Button>
          <Button variant='filled' color='error' onClick={() => handleClick({vertical: 'top', horizontal: 'right', message: 'Top right'})}>Top right</Button>
        </div>
      </div>
      <Snackbar
        key={message}
        open={open}
        message={message}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        action={
          <IconButton onClick={handleClose} className='text-muted-foreground'>
            <XIcon />
          </IconButton>
        }
        autoHideDuration={6000}
        style={{ zIndex: 1000 }}
      />
    </React.Fragment>
  )
}

export default PlaceSnackbar