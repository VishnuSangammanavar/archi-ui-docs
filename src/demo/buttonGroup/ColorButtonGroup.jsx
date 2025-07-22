import React from 'react'
import { Button, ButtonGroup } from 'archi-ui';

const ColorButtonGroup = () => {
  const buttons = [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
  ];

  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <ButtonGroup color='primary'>
        {buttons}
      </ButtonGroup>
      <ButtonGroup color='secondary'>
        {buttons}
      </ButtonGroup>
      <ButtonGroup color='success'>
        {buttons}
      </ButtonGroup>
    </div>
  )
}

export default ColorButtonGroup
