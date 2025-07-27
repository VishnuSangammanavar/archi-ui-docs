import React from 'react'
import { Avatar, AvatarGroup } from 'archi-ui'

const TotalAvatar = () => {
  return (
    <div className="flex items-center justify-center">
      <AvatarGroup total={24}>
        <Avatar alt='Eren Yeager' src='/eren-jaeger.webp' />
        <Avatar alt='Mikasa Ackerman' src='/mikasa-ackermen.jpg' />
        <Avatar alt='Armin' src='/armin.jpg' />
        <Avatar alt='Naruto' src='/naruto-uzumaki.webp' />
      </AvatarGroup>
    </div>
  )
}

export default TotalAvatar
