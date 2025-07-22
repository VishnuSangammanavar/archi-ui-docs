import React from 'react'
import { Badge } from 'archi-ui'
import { Heart, Mail } from 'lucide-react'

const BadgeVariant = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="relative inline-flex items-center">
        <Mail className='text-secondary' />
        <Badge badgeContent='10' className='absolute top-0 transform -translate-y-1/2 right-0 translate-x-1/2' />
      </div>
      <div className="relative inline-flex items-center">
        <Heart className='text-secondary' />
        <Badge variant='dot' color='error' className='absolute top-0 transform -translate-y-1/2 right-0 translate-x-1/2' />
      </div>
      <div className="relative inline-flex items-center">
        <Heart className='text-secondary' />
        <Badge badgeContent='100' color='error' className='absolute top-0 transform -translate-y-1/2 right-0 translate-x-1/2' />
      </div>
    </div>
  )
}

export default BadgeVariant
