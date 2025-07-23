import React from 'react'
import { Avatar, AvatarGroup } from 'archi-ui'

const GroupedAvatarControll = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <AvatarGroup variant='circular' size='lg' outlined={true}>
        <Avatar alt='Eren Yeager' src='/static/images/avatar/1.jpg' />
        <Avatar alt='Mikasa Ackerman' src='/static/images/avatar/2.jpg' />
        <Avatar alt='Armin' src='/static/images/avatar/3.jpg' />
        <Avatar alt='Levi Ackerman' src='/static/images/avatar/4.jpg' />
      </AvatarGroup>
      <AvatarGroup variant='circular' size='md' outlined={true}>
        <Avatar alt='Eren Yeager' src='/static/images/avatar/1.jpg' />
        <Avatar alt='Mikasa Ackerman' src='/static/images/avatar/2.jpg' />
        <Avatar alt='Armin' src='/static/images/avatar/3.jpg' />
        <Avatar alt='Levi Ackerman' src='/static/images/avatar/4.jpg' />
      </AvatarGroup>
      <AvatarGroup variant='circular' size='sm' outlined={true}>
        <Avatar alt='Eren Yeager' src='/static/images/avatar/1.jpg' />
        <Avatar alt='Mikasa Ackerman' src='/static/images/avatar/2.jpg' />
        <Avatar alt='Armin' src='/static/images/avatar/3.jpg' />
        <Avatar alt='Levi Ackerman' src='/static/images/avatar/4.jpg' />
      </AvatarGroup>
    </div>
  )
}

export default GroupedAvatarControll
