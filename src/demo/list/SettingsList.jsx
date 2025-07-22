"use client"

import React, { useState } from 'react'
import { List, ListItem, ListItemIcon, ListItemText, ListSubheader, Switch } from 'archi-ui'
import { Bluetooth, Wifi } from 'lucide-react';

const SettingsList = () => {

  const [checked, setChecked] = useState('wifi');

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
        subheader={
          <ListSubheader>Settings</ListSubheader>
        }
        className='bg-accent'
      >
        <ListItem>
          <ListItemIcon>
            <Wifi />
          </ListItemIcon>
          <ListItemText primary='Wi-Fi' />
          <Switch checked={checked.includes('wifi')} variant='standard' onChange={() => handleToggle('wifi')} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Bluetooth />
          </ListItemIcon>
          <ListItemText primary='Bluetooth' />
          <Switch checked={checked.includes('bluetooth')} variant='standard' onChange={() => handleToggle('bluetooth')} />
        </ListItem>
      </List>
    </div>
  )
}

export default SettingsList