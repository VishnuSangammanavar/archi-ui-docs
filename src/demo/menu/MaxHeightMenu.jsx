"use client"

import React, { useState } from 'react'
import { Menu, MenuItem, Button } from 'archi-ui'

const MaxHeightMenu = () => {

  const [anchorEl, setAnchorEl] = useState(null)
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
        <MenuItem divider onClick={handleClose}>Item 1</MenuItem>
        <MenuItem divider onClick={handleClose}>Item 2</MenuItem>
        <MenuItem divider onClick={handleClose}>Item 3</MenuItem>
        <MenuItem divider onClick={handleClose}>Item 4</MenuItem>
      </Menu>
    </div>
  )
}

export default MaxHeightMenu