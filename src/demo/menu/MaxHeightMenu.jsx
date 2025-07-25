"use client"

import React, { useState } from 'react'
import { Menu, MenuItem, IconButton } from 'archi-ui'
import { MoreVertical } from 'lucide-react';

const MaxHeightMenu = () => {

  const options = [
    'None',
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel',
  ];

  const ITEM_HEIGHT = 48;

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
      <IconButton
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVertical />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        style={{ height: '200px', width: '20ch' }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

export default MaxHeightMenu