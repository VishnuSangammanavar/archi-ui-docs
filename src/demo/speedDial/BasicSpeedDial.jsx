"use client"

import React, { useState } from 'react'
import { IconButton, SpeedDial, SpeedDialAction } from 'archi-ui'
import { Save, Files, Printer, Share2 } from 'lucide-react';

const BasicSpeedDial = () => {

  const [openSpeedDial, setOpenSpeedDial] = useState(false);

  const actions = [
    {icon: <IconButton><Share2 /></IconButton>, name: 'Share'},
    {icon: <IconButton><Printer /></IconButton>, name: 'Print'},
    {icon: <IconButton><Save /></IconButton>, name: 'Save'},
    {icon: <IconButton><Files /></IconButton>, name: 'Copy'},
  ];

  return (
    <div className="relative flex-grow-1 w-full bg-accent" style={{ height: '340px' }}>
      <SpeedDial
        className='absolute'
        open={openSpeedDial}
        onClose={() => setOpenSpeedDial(false)}
        onOpen={() => setOpenSpeedDial(true)}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </div>
  )
}

export default BasicSpeedDial