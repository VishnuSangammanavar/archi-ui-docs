import React from 'react'
import { Avatar } from 'archi-ui'
import { ClipboardList, Heart, Tag } from 'lucide-react'

const IconAvatar = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Avatar variant='square' className='bg-info'>
        <Heart />
      </Avatar>
      <Avatar variant='rounded' className='bg-primary'>
        <Tag />
      </Avatar>
      <Avatar variant='circular' className='bg-secondary'>
        <ClipboardList />
      </Avatar>
    </div>
  )
}

export default IconAvatar
