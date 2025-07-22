import React from 'react'
import { Button } from 'archi-ui'

const ButtonSize = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <div className='flex flex-wrap items-center justify-center gap-2'>
        <Button variant="ghost" size='lg'>Large</Button>
        <Button variant="ghost" size='md'>Medium</Button>
        <Button variant="ghost" size='sm'>Small</Button>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-2'>
        <Button variant="outlined" size='ld' className='px-8'>Large</Button>
        <Button variant="outlined" size='md'>Medium</Button>
        <Button variant="outlined" size='sm'>Small</Button>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-2'>
        <Button variant="filled" size='lg'>Large</Button>
        <Button variant="filled" size='md'>Medium</Button>
        <Button variant="filled" size='sm'>Small</Button>
      </div>
    </div>
  )
}

export default ButtonSize
