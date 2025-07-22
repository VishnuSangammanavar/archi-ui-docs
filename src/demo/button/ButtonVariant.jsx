import React from 'react'
import { Button } from 'archi-ui'

const ButtonVariant = () => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-2'>
      <Button variant="filled">Filled</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}

export default ButtonVariant
