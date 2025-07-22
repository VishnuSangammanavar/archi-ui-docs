import React from 'react'
import { Avatar } from 'elementx'

const ImageAvatar = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Avatar alt='Eren Yeager' src='/static/images/avatar/1.jpg' />
      <Avatar alt='Mikasa Ackerman' src='/static/images/avatar/2.jpg' />
      <Avatar alt='Armin' src='/static/images/avatar/3.jpg' />
    </div>
  )
}

export default ImageAvatar
