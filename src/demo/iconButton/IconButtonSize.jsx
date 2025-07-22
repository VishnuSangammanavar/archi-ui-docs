import React from 'react'
import { IconButton } from 'archi-ui'
import { Instagram } from 'lucide-react'

const IconButtonSize = () => {
  return (
    <div className='flex items-center justify-center gap-2'>
      <IconButton color='secondary' size='lg'>
        <Instagram />
      </IconButton>
      <IconButton color='secondary' size='md'>
        <Instagram />
      </IconButton>
      <IconButton color='secondary' size='sm'>
        <Instagram />
      </IconButton>
    </div>
  )
}

export default IconButtonSize
