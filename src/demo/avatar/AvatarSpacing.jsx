import React from 'react'
import { Avatar, AvatarGroup } from 'elementx'

const AvatarSpacing = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <AvatarGroup spacing='lg'>
        <Avatar alt='Eren Yeager' src='/static/images/avatar/1.jpg' />
        <Avatar alt='Mikasa Ackerman' src='/static/images/avatar/2.jpg' />
        <Avatar alt='Armin' src='/static/images/avatar/3.jpg' />
        <Avatar alt='Levi Ackerman' src='/static/images/avatar/4.jpg' />
      </AvatarGroup>
      <AvatarGroup spacing='md'>
        <Avatar alt='Eren Yeager' src='/static/images/avatar/1.jpg' />
        <Avatar alt='Mikasa Ackerman' src='/static/images/avatar/2.jpg' />
        <Avatar alt='Armin' src='/static/images/avatar/3.jpg' />
        <Avatar alt='Levi Ackerman' src='/static/images/avatar/4.jpg' />
      </AvatarGroup>
      <AvatarGroup spacing='sm'>
        <Avatar alt='Eren Yeager' src='/static/images/avatar/1.jpg' />
        <Avatar alt='Mikasa Ackerman' src='/static/images/avatar/2.jpg' />
        <Avatar alt='Armin' src='/static/images/avatar/3.jpg' />
        <Avatar alt='Levi Ackerman' src='/static/images/avatar/4.jpg' />
      </AvatarGroup>
    </div>
  )
}

export default AvatarSpacing
