import React from 'react'
import { Avatar, Badge } from 'archi-ui'

const AvatarBadge = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="relative inline-flex items-center">
        <Avatar size='lg' alt='Naruto' src='/naruto-uzumaki.webp' />
        <Badge variant='dot' color='success' className='absolute bottom-0 right-0 ring-1 ring-background' />
      </div>
      <div className="relative inline-flex items-center">
        <Avatar size='lg' alt='Levi Ackerman' src='/levi-ackermen.jpg' />
        <Badge badgeContent='1m' color='success' size='sm' className='absolute bottom-0 right-0 ring-1 py-0 ring-background' />
      </div>
      <div className="relative inline-flex items-center">
        <Avatar size='lg' alt='Eren Yeager' src='/eren-jaeger.webp' />
        <Badge badgeContent={<Avatar alt='Naruto' src='/naruto-uzumaki.webp' className='w-4 h-4 bg-secondary' />} className='absolute bottom-0 right-0 ring-1 ring-background p-0' />
      </div>
    </div>
  )
}

export default AvatarBadge
