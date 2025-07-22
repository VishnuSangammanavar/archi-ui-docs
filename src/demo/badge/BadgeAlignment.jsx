import React from 'react'
import { Badge, Button } from 'archi-ui'

const BadgeAlignment = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className='flex items-center justify-center gap-6'>
        <div className="relative inline-flex items-center">
          <Button variant='filled' color='secondary'>Bottom right</Button>
          <Badge badgeContent={80} color='warning' className='absolute bottom-0 transform translate-y-1/2 right-0 translate-x-1/2' />
        </div>
        <div className="relative inline-flex items-center">
          <Button variant='filled' color='success'>Top left</Button>
          <Badge badgeContent={50} color='error' className='absolute top-0 transform -translate-y-1/2 left-0 -translate-x-1/2' />
        </div>
        <div className="relative inline-flex items-center">
          <Button variant='filled' color='warning'>Top right</Button>
          <Badge badgeContent={60} color='primary' className='absolute top-0 transform -translate-y-1/2 right-0 translate-x-1/2' />
        </div>
        <div className="relative inline-flex items-center">
          <Button variant='filled' color='primary'>Bottom left</Button>
          <Badge badgeContent={10} color='secondary' className='absolute bottom-0 transform translate-y-1/2 left-0 -translate-x-1/2' />
        </div>
      </div>
      <div className='flex items-center justify-center gap-4'>
        <div className="relative inline-flex items-center">
          <Button variant='filled' color='secondary'>Bottom right</Button>
          <Badge variant='dot' color='warning' className='absolute bottom-0 transform translate-y-1/2 right-0 translate-x-1/2' />
        </div>
        <div className="relative inline-flex items-center">
          <Button variant='filled' color='success'>Top left</Button>
          <Badge variant='dot' color='error' className='absolute top-0 transform -translate-y-1/2 left-0 -translate-x-1/2' />
        </div>
        <div className="relative inline-flex items-center">
          <Button variant='filled' color='warning'>Top right</Button>
          <Badge variant='dot' color='primary' className='absolute top-0 transform -translate-y-1/2 right-0 translate-x-1/2' />
        </div>
        <div className="relative inline-flex items-center">
          <Button variant='filled' color='primary'>Bottom left</Button>
          <Badge variant='dot' color='secondary' className='absolute bottom-0 transform translate-y-1/2 left-0 -translate-x-1/2' />
        </div>
      </div>
    </div>
  )
}

export default BadgeAlignment
