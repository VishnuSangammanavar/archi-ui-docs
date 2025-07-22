"use client"

import React, { useState } from 'react'
import { IconButton, SpeedDial, SpeedDialAction, SpeedDialIcon, Switch } from 'archi-ui';
import { Files, Pencil, Plus, Printer, Save, Share2 } from 'lucide-react';

const SpeedDialPlayground = () => {

  const [openSpeedDial, setOpenSpeedDial] = useState(true);
  const [direction, setDirection] = useState('up');
  const [placement, setPlacement] = useState('bottom-right');
  const [toolTipPlacement, setToolTipPlacement] = useState('left');
  const [openToolTip, setOpenToolTip] = useState(true);
  const [toolTipArrow, setToolTipArrow] = useState(true);
  const [hidden, setHidden] = useState(false);

  const handleHiddenChange = (event) => {
    setHidden(event.target.checked);
  }

  const handlDirectionChange = (event) => {
    setDirection(event.target.value);
  }

  const handleTooltipChange = (event) => {
    setOpenToolTip(event.target.checked);
  }

  const handleTooltipArrowChange = (event) => {
    setToolTipArrow(event.target.checked);
  }

  const handleTooltipPlacementChange = (event) => {
    setToolTipPlacement(event.target.value);
  }

  const handlPlacementChange = (event) => {
    setPlacement(event.target.value);
  }

  const actions = [
    {icon: <IconButton><Share2 /></IconButton>, name: 'Share'},
    {icon: <IconButton><Printer /></IconButton>, name: 'Print'},
    {icon: <IconButton><Save /></IconButton>, name: 'Save'},
    {icon: <IconButton><Files /></IconButton>, name: 'Copy'},
  ];

  return (
    <div className="relative">
      <div className="flex flex-col items-start gap-2">
        <div className='flex gap-2'>
          <Switch checked={hidden} onChange={handleHiddenChange} variant='standard' />
          <p>Hidden</p>
        </div>
        <div className='flex gap-2'>
          <Switch checked={openToolTip} onChange={handleTooltipChange} variant='standard' />
          <p>Tooltip</p>
        </div>
        <div className='flex gap-2'>
          <Switch checked={toolTipArrow} onChange={handleTooltipArrowChange} variant='standard' />
          <p>Tooltip arrow</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p>Direction:</p>
          <div className="flex gap-2">
            <input type='radio' onChange={handlDirectionChange} value='up' checked={direction == 'up'} name='direction' id='up' />
            <label htmlFor="up">Up</label>
            <input type='radio' onChange={handlDirectionChange} value='right' checked={direction == 'right'} name='direction' id='right' />
            <label htmlFor="right">Right</label>
            <input type='radio' onChange={handlDirectionChange} value='down' checked={direction == 'down'} name='direction' id='down' />
            <label htmlFor="down">Down</label>
            <input type='radio' onChange={handlDirectionChange} value='left' checked={direction == 'left'} name='direction' id='left' />
            <label htmlFor="left">Left</label>
          </div>
          <p>Placement:</p>
          <div className="flex gap-2">
            <input type='radio' onChange={handlPlacementChange} value='top-left' checked={placement == 'top-left'} name='placement' id='top-left' />
            <label htmlFor="top-left">top-left</label>
            <input type='radio' onChange={handlPlacementChange} value='top-right' checked={placement == 'top-right'} name='placement' id='top-right' />
            <label htmlFor="top-right">top-right</label>
            <input type='radio' onChange={handlPlacementChange} value='bottom-left' checked={placement == 'bottom-left'} name='placement' id='bottom-left' />
            <label htmlFor="bottom-left">bottom-left</label>
            <input type='radio' onChange={handlPlacementChange} value='bottom-right' checked={placement == 'bottom-right'} name='placement' id='bottom-right' />
            <label htmlFor="bottom-right">bottom-right</label>
          </div>
          <p>Tooltip Placement:</p>
          <div className="flex gap-2">
            <input type='radio' onChange={handleTooltipPlacementChange} value='top' checked={toolTipPlacement == 'top'} name='toolTipPlacement' id='tooltip-top' />
            <label htmlFor="tooltip-top">top</label>
            <input type='radio' onChange={handleTooltipPlacementChange} value='right' checked={toolTipPlacement == 'right'} name='toolTipPlacement' id='tooltip-right' />
            <label htmlFor="tooltip-right">right</label>
            <input type='radio' onChange={handleTooltipPlacementChange} value='bottom' checked={toolTipPlacement == 'bottom'} name='toolTipPlacement' id='tooltip-bottom' />
            <label htmlFor="tooltip-bottom">bottom</label>
            <input type='radio' onChange={handleTooltipPlacementChange} value='left' checked={toolTipPlacement == 'left'} name='toolTipPlacement' id='tooltip-left' />
            <label htmlFor="tooltip-left">left</label>
          </div>
        </div>
      </div>
      <div className="relative w-full bg-accent" style={{ height: '360px' }}>
        <SpeedDial
          className='absolute'
          hidden={hidden}
          icon={<SpeedDialIcon icon={<Plus />} openIcon={<Pencil />} open={openSpeedDial} />}
          open={openSpeedDial}
          onClose={() => setOpenSpeedDial(false)}
          onOpen={() => setOpenSpeedDial(true)}
          direction={direction}
          placement={placement}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipOpen={openToolTip}
              tooltipPlacement={toolTipPlacement}
              arrow={toolTipArrow}
            />
          ))}
        </SpeedDial>
      </div>
    </div>
  )
}

export default SpeedDialPlayground