import React from 'react'
import { Avatar } from 'archi-ui'

const ImageAvatar = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Avatar alt='Eren Yeager' src='/eren-jaeger.webp' />
      <Avatar alt='Mikasa Ackerman' src='/mikasa-ackermen.jpg' />
      <Avatar alt='Armin' src='/armin.jpg' />
    </div>
  )
}

export default ImageAvatar
