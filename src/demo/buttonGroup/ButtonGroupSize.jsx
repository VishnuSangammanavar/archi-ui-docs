import React from 'react'
import { Button, ButtonGroup } from 'archi-ui';

const ButtonGroupSize = () => {

  const buttons = [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
  ];

  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <ButtonGroup size="sm">
        {buttons}
      </ButtonGroup>
      <ButtonGroup size='md'>
        {buttons}
      </ButtonGroup>
      <ButtonGroup size="lg">
        {buttons}
      </ButtonGroup>
    </div>
  )
}

export default ButtonGroupSize
