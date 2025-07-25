"use client"

import React, { useState } from 'react'
import { Avatar, IconButton, ListItemAvatar, ListItemIcon, Menu, MenuItem, Typography } from 'archi-ui';
import { LogOut, Plus, Settings } from 'lucide-react';

const AccountMenu = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <div className='flex h-12 items-center justify-end gap-4 bg-primary'>
      <Typography className='text-muted-foreground'>Home</Typography>
      <Typography className='text-muted-foreground'>About</Typography>
      <Typography className='text-muted-foreground'>Task</Typography>
      <IconButton
        onClick={handleClick}
        className='mr-2'
      >
        <Avatar>M</Avatar>
      </IconButton>
      <Menu open={open} onClose={handleClose} anchorEl={anchorEl} 
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemAvatar>
            <Avatar size='sm' />
          </ListItemAvatar> Profile
        </MenuItem>
        <MenuItem onClick={handleClose} divider>
          <ListItemAvatar>
            <Avatar size='sm' />
          </ListItemAvatar>
          My account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Plus />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose} divider>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <LogOut />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  )
}

export default AccountMenu
