"use client"

import React, { useState } from 'react'
import { Avatar, Checkbox, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from 'archi-ui';

const AvatarControlledList = () => {

  const [checked, setChecked] = useState([1]);

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
              <ListItemButton dense>
                <ListItemAvatar>
                  <Avatar
                    alt={`Avatar ${value + 1}`}
                    src="/naruto-uzumaki.webp"
                  />
                </ListItemAvatar>
                <ListItemText primary={`List item ${value + 1}`} />
                <Checkbox onChange={() => handleToggle(value)} checked={checked.includes(value)} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    </div>
  )
}

export default AvatarControlledList
