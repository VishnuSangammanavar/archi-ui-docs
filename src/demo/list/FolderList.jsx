import React from 'react'
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from 'archi-ui'
import { BriefcaseBusiness, Image, TreePalm } from 'lucide-react'

const FolderList = () => {
  return (
    <div className='flex items-center justify-center'>
      <List style={{ width: '300px' }} className='bg-accent'>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Image />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Photos' secondary='May 18, 2026' />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BriefcaseBusiness />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Work' secondary='May 20, 2026' />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <TreePalm />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Vacation' secondary='May 25, 2026' />
        </ListItem>
      </List>
    </div>
  )
}

export default FolderList