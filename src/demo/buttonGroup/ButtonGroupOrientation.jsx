import React from 'react'
import { Button, ButtonGroup } from 'archi-ui';

const ButtonGroupOrientation = () => {
    const buttons = [
      <Button key="one">One</Button>,
      <Button key="two">Two</Button>,
      <Button key="three">Three</Button>,
    ];

  return (
    <div className='flex items-center justify-center gap-2'>
      <ButtonGroup
        orientation="vertical"
        variant="filled"
      >
        {buttons}
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        variant="outlined"
      >
        {buttons}
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        variant="ghost"
      >
        {buttons}
      </ButtonGroup>
    </div>
  );
}

export default ButtonGroupOrientation
