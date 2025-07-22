import React from 'react'
import { Badge, Button } from 'archi-ui'

const BadgeSize = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="relative inline-flex items-center">
        <Button variant='filled' color='secondary' size='sm'>Small</Button>
        <Badge badgeContent={"10"} color={'primary'} size='sm' className='absolute top-0 transform -translate-y-1/2 right-0 translate-x-1/2' />
      </div>
      <div className="relative inline-flex items-center">
        <Button variant='filled' color='secondary' size='md'>Medium</Button>
        <Badge badgeContent={"10"} color={'primary'} size='md' className='absolute top-0 transform -translate-y-1/2 right-0 translate-x-1/2' />
      </div>
      <div className="relative inline-flex items-center">
        <Button variant='filled' color='secondary' size='lg'>Large</Button>
        <Badge badgeContent={"10"} color={'primary'} size='lg' className='absolute top-0 transform -translate-y-1/2 right-0 translate-x-1/2' />
      </div>
    </div>
  )
}

export default BadgeSize
