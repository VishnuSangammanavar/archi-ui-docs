import React from 'react'
import { Avatar } from 'elementx'

const AvatarVariant = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Avatar variant='square' className='bg-secondary'>
        S
      </Avatar>
      <Avatar variant='rounded' className='bg-info'>
        R
      </Avatar>
      <Avatar variant='circular' className='bg-warning'>
        C
      </Avatar>
    </div>
  )
}

export default AvatarVariant
