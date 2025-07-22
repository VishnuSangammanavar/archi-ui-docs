import React from 'react'
import { Badge } from 'archi-ui'
import { Mail } from 'lucide-react'

const BadgeShowzero = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="relative inline-flex items-center">
        <Mail className='text-primary' />
        <Badge badgeContent={0} color='secondary' className='absolute top-0 transform -translate-y-1/2 right-0 translate-x-1/2' />
      </div>
      <div className="relative inline-flex items-center">
        <Mail className='text-primary' />
        <Badge badgeContent={0} showZero color='secondary' className='absolute top-0 transform -translate-y-1/2 right-0 translate-x-1/2' />
      </div>
    </div>
  )
}

export default BadgeShowzero
