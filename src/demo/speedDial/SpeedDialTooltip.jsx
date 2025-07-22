"use client"

import React, { useState } from 'react'
import { IconButton, SpeedDial, SpeedDialAction } from 'archi-ui';
import { Files, Printer, Save, Share2 } from 'lucide-react';

const SpeedDialTooltip = () => {

  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }
  
  const actions = [
    {icon: <IconButton><Share2 /></IconButton>, name: 'Share'},
    {icon: <IconButton><Printer /></IconButton>, name: 'Print'},
    {icon: <IconButton><Save /></IconButton>, name: 'Save'},
    {icon: <IconButton><Files /></IconButton>, name: 'Copy'},
  ];

  return (
    <div className="relative flex-grow-1 w-full bg-accent" style={{ height: '360px' }}>
      <SpeedDial
        className='absolute'
        open={open}
        onOpen={handleOpen}
        onClose={handleClose}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipPlacement='left'
            tooltipOpen
            arrow
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </div>
  )
}

export default SpeedDialTooltip