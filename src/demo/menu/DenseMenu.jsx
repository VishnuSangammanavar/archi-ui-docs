import React from 'react'
import { Divider, ListItemIcon, ListItemText, MenuItem, MenuList } from 'archi-ui'
import { ArrowDownUp, Brush, MonitorCog, Plus, RotateCw, SquareTerminal } from 'lucide-react'

const DenseMenu = () => {
  return (
    <div className='flex items-center justify-center'>
      <MenuList>
        <MenuItem dense>
          <ListItemText inset primary='View' />
        </MenuItem>
        <MenuItem dense>
          <ListItemIcon className='text-primary'>
            <ArrowDownUp size={16} />
          </ListItemIcon>
          <ListItemText primary='Short by' />
        </MenuItem>
        <MenuItem dense>
          <ListItemIcon>
            <RotateCw size={16} />
          </ListItemIcon>
          <ListItemText primary='Refresh' />
        </MenuItem>
        <Divider />
        <MenuItem dense>
          <ListItemIcon className='text-primary'>
            <Plus size={16} />
          </ListItemIcon>
          <ListItemText primary='New' />
        </MenuItem>
        <Divider />
        <MenuItem dense>
          <ListItemIcon className='text-primary'>
            <MonitorCog size={16} />
          </ListItemIcon>
          <ListItemText primary='Display setting' />
        </MenuItem>
        <MenuItem dense>
          <ListItemIcon>
            <Brush size={16} />
          </ListItemIcon>
          <ListItemText primary='Personalize' />
        </MenuItem>
        <Divider />
        <MenuItem dense>
          <ListItemIcon>
            <SquareTerminal size={16} />
          </ListItemIcon>
          <ListItemText primary='Open in terminal' />
        </MenuItem>
        <Divider />
        <MenuItem dense>
          <ListItemText primary='Show more options...' />
        </MenuItem>
      </MenuList>
    </div>
  )
}

export default DenseMenu
