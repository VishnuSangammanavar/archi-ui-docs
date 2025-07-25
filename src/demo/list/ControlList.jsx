"use client"

import React, { useState } from 'react'
import { Checkbox, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from 'archi-ui'
import { Plus } from 'lucide-react';

const ControlList = () => {

  const [checked, setChecked] = useState([0]);
  
  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    }
    else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked)
  }

  return (
    <div className='flex items-center justify-center'>
      <List
        style={{ width: '300px' }}
        className='bg-accent'
      >
        {[0, 1, 2, 3].map((value) => {
          return (
            <ListItem
              disablePadding
              key={value}
            >
              <ListItemButton onClick={() => handleToggle(value)} dense>
                <ListItemIcon>
                  <Checkbox
                    checked={checked.includes(value)}
                    tabIndex={-1}
                  />
                </ListItemIcon>
                <ListItemText primary={`List item ${value + 1}`} />
                <IconButton>
                  <Plus />
                </IconButton>
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    </div>
  )
}

export default ControlList
