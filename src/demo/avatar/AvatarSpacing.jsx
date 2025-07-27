import React from 'react'
import { Avatar, AvatarGroup } from 'archi-ui'

const AvatarSpacing = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <AvatarGroup spacing='lg'>
        <Avatar alt='Naruto' src='/naruto-uzumaki.webp' />
        <Avatar alt='Eren Yeager' src='/eren-jaeger.webp' />
        <Avatar alt='Mikasa Ackerman' src='/mikasa-ackermen.jpg' />
        <Avatar alt='Armin' src='/armin.jpg' />
      </AvatarGroup>
      <AvatarGroup spacing='md'>
        <Avatar alt='Naruto' src='/naruto-uzumaki.webp' />
        <Avatar alt='Eren Yeager' src='/eren-jaeger.webp' />
        <Avatar alt='Mikasa Ackerman' src='/mikasa-ackermen.jpg' />
        <Avatar alt='Armin' src='/armin.jpg' />
      </AvatarGroup>
      <AvatarGroup spacing='sm'>
        <Avatar alt='Naruto' src='/naruto-uzumaki.webp' />
        <Avatar alt='Eren Yeager' src='/eren-jaeger.webp' />
        <Avatar alt='Mikasa Ackerman' src='/mikasa-ackermen.jpg' />
        <Avatar alt='Armin' src='/armin.jpg' />
      </AvatarGroup>
    </div>
  )
}

export default AvatarSpacing
