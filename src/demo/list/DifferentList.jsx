import React from 'react'
import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Typography } from 'archi-ui'
import { Trash, Folder } from 'lucide-react'

const DifferentList = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <div>
          <Typography variant='h6'>Text only</Typography>
          <div>
            <List className='bg-accent' style={{ width: '300px' }}>
              <ListItem>
                <ListItemText primary='Single-line item' secondary='Secondary text' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Single-line item' secondary='Secondary text' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Single-line item' secondary='Secondary text' />
              </ListItem>
            </List>
          </div>
        </div>
        <div>
          <Typography variant='h6'>Icon with text</Typography>
          <div>
            <List className='bg-accent' style={{ width: '300px' }}>
              <ListItem>
                <ListItemIcon>
                  <Folder />
                </ListItemIcon>
                <ListItemText primary='Single-line item' secondary='Secondary text' />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Folder />
                </ListItemIcon>
                <ListItemText primary='Single-line item' secondary='Secondary text' />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Folder />
                </ListItemIcon>
                <ListItemText primary='Single-line item' secondary='Secondary text' />
              </ListItem>
            </List>
          </div>
        </div>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <div>
          <Typography variant='h6'>Avatar with text</Typography>
          <div>
            <List className='bg-accent' style={{ width: '300px' }}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText primary='Single-line item' secondary='Secondary text' />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText primary='Single-line item' secondary='Secondary text' />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText primary='Single-line item' secondary='Secondary text' />
              </ListItem>
            </List>
          </div>
        </div>
        <div>
          <Typography variant='h6'>Avatar with text and icon</Typography>
          <div>
            <List className='bg-accent' style={{ width: '300px' }}>
              <ListItem secondaryAction={
                <IconButton>
                    <Trash />
                  </IconButton>
              }>
                <ListItemAvatar>
                  <Avatar>
                    <Folder />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Single-line item' secondary='Secondary text' />
              </ListItem>
              <ListItem secondaryAction={
                <IconButton>
                    <Trash />
                  </IconButton>
              }>
                <ListItemAvatar>
                  <Avatar>
                    <Folder />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Single-line item' secondary='Secondary text' />
              </ListItem>
              <ListItem secondaryAction={
                <IconButton>
                    <Trash />
                  </IconButton>
              }>
                <ListItemAvatar>
                  <Avatar>
                    <Folder />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Single-line item' secondary='Secondary text' />
              </ListItem>
            </List>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DifferentList