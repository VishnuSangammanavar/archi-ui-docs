import React from 'react'
import { Badge, Chip } from 'archi-ui'

const ChipBadge = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="relative inline-flex items-center">
        <Chip color='success' size='md'>Medium</Chip>
        <Badge color='error' badgeContent={"10"} className='absolute top-0 transform -translate-y-1/2 right-0 translate-x-1/2' />
      </div>
      <div className="relative inline-flex items-center">
        <Chip color='secondary' size='sm'>Small</Chip>
        <Badge color='success' badgeContent={"10"} className='absolute top-0 transform -translate-y-1/2 right-0 translate-x-1/2' />
      </div>
    </div>
  )
}

export default ChipBadge
