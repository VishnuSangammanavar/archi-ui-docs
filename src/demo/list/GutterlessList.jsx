import React from 'react'
import { IconButton, List, ListItem, ListItemText } from 'archi-ui'
import { MessageSquareText } from 'lucide-react'

const GutterlessList = () => {
  return (
    <div className='flex items-center justify-center'>
      <List style={{ width: '300px' }} className='bg-accent'>
        {[1, 2, 3].map((value) => (
          <ListItem
            key={value}
            disableGutters
            divider
            secondaryAction={
              <IconButton>
                <MessageSquareText />
              </IconButton>
          }>
            <ListItemText primary={`List item ${value}`} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default GutterlessList