import React from 'react'
import { Avatar, AvatarGroup } from 'archi-ui'

const GroupedAvatarControll = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <AvatarGroup variant='circular' size='lg' outlined={true}>
        <Avatar alt='Eren Yeager' src='/eren-jaeger.webp' />
        <Avatar alt='Mikasa Ackerman' src='/mikasa-ackermen.jpg' />
        <Avatar alt='Armin' src='/armin.jpg' />
        <Avatar alt='Levi Ackerman' src='/levi-ackermen.jpg' />
      </AvatarGroup>
      <AvatarGroup variant='circular' size='md' outlined={true}>
        <Avatar alt='Eren Yeager' src='/eren-jaeger.webp' />
        <Avatar alt='Mikasa Ackerman' src='/mikasa-ackermen.jpg' />
        <Avatar alt='Armin' src='/armin.jpg' />
        <Avatar alt='Levi Ackerman' src='/levi-ackermen.jpg' />
      </AvatarGroup>
      <AvatarGroup variant='circular' size='sm' outlined={true}>
        <Avatar alt='Eren Yeager' src='/eren-jaeger.webp' />
        <Avatar alt='Mikasa Ackerman' src='/mikasa-ackermen.jpg' />
        <Avatar alt='Armin' src='/armin.jpg' />
        <Avatar alt='Levi Ackerman' src='/levi-ackermen.jpg' />
      </AvatarGroup>
    </div>
  )
}

export default GroupedAvatarControll
