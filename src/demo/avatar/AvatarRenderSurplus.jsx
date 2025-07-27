"use client"

import React from 'react'
import { Avatar, AvatarGroup } from 'archi-ui'

const AvatarRenderSurplus = () => {
  return (
    <div className="flex items-center justify-center">
      <AvatarGroup total={5500} renderSurplus={(surplus) => <span>+{surplus.toString()[0]}K</span>}>
        <Avatar alt='Naruto' src='/naruto-uzumaki.webp' />
        <Avatar alt='Eren Yeager' src='/eren-jaeger.webp' />
        <Avatar alt='Mikasa Ackerman' src='/mikasa-ackermen.jpg' />
        <Avatar alt='Armin' src='/armin.jpg' />
        <Avatar alt='Levi Ackerman' src='/levi-ackermen.jpg' />
      </AvatarGroup>
    </div>
  )
}

export default AvatarRenderSurplus
