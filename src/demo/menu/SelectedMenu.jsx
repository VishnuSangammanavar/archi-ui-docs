"use client"

import React, { useState } from 'react'
import { Button, Menu, MenuItem, Typography } from 'archi-ui';

const SelectedMenu = () => {

  const options = [
    'Profile',
    'My account',
    'Add another account',
    'Settings',
    'Logout'
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  }

  const handleMenuItemClick = (index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <Typography>{options[selectedIndex]}</Typography>
      <Button variant='outlined' onClick={handleClick}>
        Open Menu
      </Button>
      <Menu open={open} onClose={handleClose} anchorEl={anchorEl}>
        {options.map((option, index) => (
          <MenuItem
            key={index}
            selected={index === selectedIndex}
            disabled={index === 0}
            onClick={() => handleMenuItemClick(index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

export default SelectedMenu
