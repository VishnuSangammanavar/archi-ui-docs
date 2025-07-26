import React from 'react'
import { Avatar, Badge } from 'archi-ui'

const BadgeColor = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <div className="relative inline-flex items-center">
        <Avatar />
        <Badge badgeContent={50} color='primary' className='absolute top-0 transform -translate-y-1/2 right-0 translate-x-1/2' />
      </div>
      <div className="relative inline-flex items-center">
        <Avatar />
        <Badge badgeContent={50} color='secondary' className='absolute top-0 transform -translate-y-1/2 right-0 translate-x-1/2' />
      </div>
      <div className="relative inline-flex items-center">
        <Avatar />
        <Badge badgeContent={50} color='info' className='absolute top-0 transform -translate-y-1/2 right-0 translate-x-1/2' />
      </div>
      <div className="relative inline-flex items-center">
        <Avatar />
        <Badge badgeContent={50} color='warning' className='absolute top-0 transform -translate-y-1/2 right-0 translate-x-1/2' />
      </div>
      <div className="relative inline-flex items-center">
        <Avatar />
        <Badge badgeContent={50} color='success' className='absolute top-0 transform -translate-y-1/2 right-0 translate-x-1/2' />
      </div>
      <div className="relative inline-flex items-center">
        <Avatar />
        <Badge badgeContent={50} color='error' className='absolute top-0 transform -translate-y-1/2 right-0 translate-x-1/2' />
      </div>
    </div>
  )
}

export default BadgeColor
