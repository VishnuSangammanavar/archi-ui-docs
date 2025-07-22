import React from 'react'
import { Button } from 'archi-ui'

const ButtonDisabled = () => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-2'>
      <Button variant="filled" disabled>Filled disabled</Button>
      <Button variant="outlined" disabled>Outlined disabled</Button>
      <Button variant="ghost" disabled>Ghost disabled</Button>
      <Button variant="link" disabled>Link disabled</Button>
    </div>
  )
}

export default ButtonDisabled
