import React from 'react'
import { ListItemIcon, ListItemText, MenuItem, MenuList, Typography } from 'archi-ui'
import { Clipboard, Copy, Scissors } from 'lucide-react'

const IconMenu = () => {
  return (
    <div className='flex items-center justify-center'>
      <MenuList style={{ width: '300px' }}>
        <MenuItem>
          <ListItemIcon>
            <Scissors />
          </ListItemIcon>
          <ListItemText primary='Cut' />
          <Typography variant='caption'>Clt X</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Copy />
          </ListItemIcon>
          <ListItemText primary='Copy' />
          <Typography variant='caption'>Clt C</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Clipboard />
          </ListItemIcon>
          <ListItemText primary='Paste' />
          <Typography variant='caption'>Clt V</Typography>
        </MenuItem>
      </MenuList>
    </div>
  )
}

export default IconMenu
