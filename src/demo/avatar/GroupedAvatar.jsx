import React from 'react'
import { Avatar, AvatarGroup } from 'archi-ui'

const GroupedAvatar = () => {
  return (
    <div className="flex items-center justify-center">
      <AvatarGroup max={4}>
        <Avatar alt='Eren Yeager' src='/eren-jaeger.webp' />
        <Avatar alt='Mikasa Ackerman' src='/mikasa-ackermen.jpg' />
        <Avatar alt='Armin' src='/armin.jpg' />
        <Avatar alt='Levi Ackerman' src='/levi-ackermen.jpg' />
        <Avatar alt='Naruto Uzumaki' src='/naruto-uzumaki.webp' />
      </AvatarGroup>
    </div>
  )
}

export default GroupedAvatar
