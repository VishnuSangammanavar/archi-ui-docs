import React from 'react'
import { Divider, List, ListItem, ListItemText } from 'archi-ui'

const DividerVariant = () => {
  return (
    <div className='flex items-center justify-center'>
      <List className="w-full h-auto p-0 rounded-md border border-border border-solid bg-accent">
        <ListItem>
          <ListItemText primary='Full width variant below' />
        </ListItem>
        <Divider variant='fullwidth' />
        <ListItem>
          <ListItemText primary='Inset variant below' />
        </ListItem>
        <Divider variant='inset' />
        <ListItem>
          <ListItemText primary='Middle variant below' />
        </ListItem>
        <Divider variant='middle' />
        <ListItem>
          <ListItemText primary='List item' />
        </ListItem>
      </List>
    </div>
  )
}

export default DividerVariant
