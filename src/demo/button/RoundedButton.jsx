import React from 'react'
import { Button } from 'archi-ui'

const RoundedButton = () => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-2'>
      <Button variant="filled" rounded='none'>None</Button>
      <Button variant="filled" rounded='sm'>Small</Button>
      <Button variant="filled" rounded='lg'>Large</Button>
      <Button variant="filled" rounded='full'>Full</Button>
    </div>
  )
}

export default RoundedButton
