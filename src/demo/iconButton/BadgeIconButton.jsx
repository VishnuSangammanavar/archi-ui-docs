import React from 'react'
import { Badge, IconButton } from 'archi-ui'
import { Mail } from 'lucide-react'

const BadgeIconButton = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <IconButton color='primary'>
        <Mail className='text-secondary' />
        <Badge badgeContent='10' className='absolute top-0 transform -translate-y-1/2 right-0 translate-x-1/2' />
      </IconButton>
    </div>
  )
}

export default BadgeIconButton
