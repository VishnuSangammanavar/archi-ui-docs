"use client"

import React, { useState } from 'react'
import { Divider, List, ListItemButton, ListItemIcon, ListItemText } from 'archi-ui'
import { Inbox, MailOpen } from 'lucide-react';

const SelectedListItem = () => {

  const [selected, setSelected] = useState(1);

  const handleListItemClick = (index) => {
    setSelected(index)
  }

  return (
    <div className='flex items-center justify-center'>
      <div className='bg-accent' style={{ width: '350px' }}>
        <List>
          <ListItemButton
            selected={selected === 0}
            onClick={() => handleListItemClick(0)}
          >
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary='Index' />
          </ListItemButton>
          <ListItemButton
            selected={selected === 1}
            onClick={() => handleListItemClick(1)}
          >
            <ListItemIcon>
              <MailOpen />
            </ListItemIcon>
            <ListItemText primary='Drafts' />
          </ListItemButton>
        </List>
        <Divider />
        <List>
          <ListItemButton
            selected={selected === 2}
            onClick={() => handleListItemClick(2)}
          >
            <ListItemText primary='Trash'/>
          </ListItemButton>
          <ListItemButton
            selected={selected === 3}
            onClick={() => handleListItemClick(3)}
          >
            <ListItemText primary='Spam' />
          </ListItemButton>
        </List>
      </div>
    </div>
  )
}

export default SelectedListItem