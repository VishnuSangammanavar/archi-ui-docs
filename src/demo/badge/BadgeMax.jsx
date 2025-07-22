import React from 'react'
import { Badge } from 'archi-ui'
import { Mail } from 'lucide-react'

const BadgeMax = () => {
  return (
    <div className="flex items-center justify-center gap-6">
      <div className="relative inline-flex items-center">
        <Mail className='text-primary' />
        <Badge badgeContent={99} color='secondary' className='absolute top-0 transform -translate-y-1/2 right-0 translate-x-1/2' />
      </div>
      <div className="relative inline-flex items-center">
        <Mail className='text-primary' />
        <Badge badgeContent={100} color='secondary' className='absolute top-0 transform -translate-y-1/2 right-0 translate-x-1/2' />
      </div>
      <div className="relative inline-flex items-center">
        <Mail className='text-primary' />
        <Badge badgeContent={1000} max={999} color='secondary' className='absolute top-0 transform -translate-y-1/2 right-0 translate-x-1/2' />
      </div>
    </div>
  )
}

export default BadgeMax
