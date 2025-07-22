import React from 'react'
import { Button, ButtonGroup } from 'archi-ui'

const ButtonGroupVariant = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <ButtonGroup variant="filled">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="outlined">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="ghost">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  )
}

export default ButtonGroupVariant
