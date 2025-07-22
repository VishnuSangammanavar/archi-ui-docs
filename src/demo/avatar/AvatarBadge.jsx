import React from 'react'
import { Avatar, Badge } from 'elementx'

const AvatarBadge = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="relative inline-flex items-center">
        <Avatar src='./images/' className='bg-warning' />
        <Badge variant='dot' color='success' className='absolute bottom-0 right-0 ring-1 ring-background' />
      </div>
      <div className="relative inline-flex items-center">
        <Avatar src='./images/' className='bg-success' />
        <Badge badgeContent={<Avatar className='w-4 h-4 bg-secondary'>v</Avatar>} className='absolute bottom-0 right-0 ring-1 ring-background p-0' />
      </div>
    </div>
  )
}

export default AvatarBadge
