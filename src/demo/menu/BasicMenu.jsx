"use client"

import React, { useState } from 'react'
import { Button, Menu, MenuItem } from 'archi-ui';

const BasicMenu = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <div className='flex items-center justify-center'>
      <Button variant='outlined' onClick={handleClick}>
        Open Menu
      </Button>
      <Menu open={open} onClose={handleClose} anchorEl={anchorEl}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  )
}

export default BasicMenu
