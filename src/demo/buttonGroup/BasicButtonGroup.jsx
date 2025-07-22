import React from 'react'
import { Button, ButtonGroup } from 'archi-ui'

const BasicButtonGroup = () => {
  return (
    <div className='flex items-center justify-center'>
      <ButtonGroup variant="filled">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  )
}

export default BasicButtonGroup
