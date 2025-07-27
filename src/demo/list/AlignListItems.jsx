import React from 'react'
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from 'archi-ui'

const AlignListItems = () => {
  return (
    <div className='flex items-center justify-center'>
      <List style={{ width: '100%', maxWidth: '360px' }} className='bg-accent'>
        <ListItem alignItems="flexStart">
          <ListItemAvatar>
            <Avatar alt="Eren Jaeger" src="/eren-jaeger.webp" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  variant="body2"
                  className='text-foreground inline'
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" />
        <ListItem alignItems="flexStart">
          <ListItemAvatar>
            <Avatar alt="Levi Ackermen" src="/levi-ackermen.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  variant="body2"
                  className='text-foreground inline'
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" />
        <ListItem alignItems="flexStart">
          <ListItemAvatar>
            <Avatar alt="Naruto Uzumaki" src="/naruto-uzumaki.webp" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  variant="body2"
                  className='text-foreground inline'
                >
                  Sandra Adams
                </Typography>
                {' — Do you have Paris recommendations? Have you ever…'}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </div>
  )
}

export default AlignListItems
