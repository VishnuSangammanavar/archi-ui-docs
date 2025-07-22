"use client"

import React, { useState } from 'react'
import { Avatar, Button, Dialog, DialogTitle, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from 'archi-ui'
import { Plus } from 'lucide-react';

const BasicDialog = () => {

  const emails = ['username@gmail.com', 'user117@gmail.com'];
  
  const [open, setOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(emails[1])

  const handleClick = () => {
    setOpen(true);
  }

  const handleCLose = () => {
    setOpen(false);
  }
  
  const handleItemClick = (email) => {
    setSelectedValue(email)
    setOpen(false);
  }

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <Typography variant='subtitle1'>Seleted: {selectedValue}</Typography>
      <Button variant='filled' onClick={handleClick}>Open simple dialog</Button>
      <Dialog open={open} onClose={handleCLose}>
        <DialogTitle>Set backup account</DialogTitle>
          <List>
            {emails.map((email) => (
              <ListItem disablePadding key={email}>
                <ListItemButton onClick={() => handleItemClick(email)} className='gap-2'>
                  <ListItemAvatar>
                    <Avatar className='bg-primary' />
                  </ListItemAvatar>
                  <ListItemText primary={email} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton onClick={handleCLose} className='gap-2'>
                <ListItemAvatar>
                  <Avatar>
                    <Plus />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Add account' />
              </ListItemButton>
            </ListItem>
          </List>
      </Dialog>
    </div>
  )
}

export default BasicDialog