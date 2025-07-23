import React from 'react'
import { Avatar } from 'archi-ui'

const ImageAvatar = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Avatar alt='Eren Yeager' src='/broken-image.jpg' className='bg-error'>B</Avatar>
      <Avatar alt='Mikasa Ackerman' src='/broken-image.jpg' className='bg-success' />
      <Avatar src='broken-image.jpg' className='bg-secondary' />
    </div>
  )
}

export default ImageAvatar
