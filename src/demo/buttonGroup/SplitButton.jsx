"use client"

import React, { useState } from 'react'
import { Button, ButtonGroup, Menu, MenuItem } from 'archi-ui';
import { ChevronDown } from 'lucide-react';

const SplitButton = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);

  const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];

  const handleMenuItemClick = (index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleButtonClick = (e) => {
    setAnchorEl(e.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <div className='flex items-center justify-center'>
      <ButtonGroup variant="filled">
        <Button>{options[selectedIndex]}</Button>
        <Button onClick={handleButtonClick}>
          <ChevronDown />
        </Button>
      </ButtonGroup>
      <Menu
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 2}
            selected={index === selectedIndex}
            onClick={() => handleMenuItemClick(index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default SplitButton