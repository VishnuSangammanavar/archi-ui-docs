import React from 'react'
import { Avatar, AvatarGroup } from 'archi-ui'

const TotalAvatar = () => {
  return (
    <div className="flex items-center justify-center">
      <AvatarGroup total={24}>
        <Avatar alt='Eren Yeager' src='/static/images/avatar/1.jpg' />
        <Avatar alt='Mikasa Ackerman' src='/static/images/avatar/2.jpg' />
        <Avatar alt='Armin' src='/static/images/avatar/3.jpg' />
        <Avatar alt='Naruto' src='/static/images/avatar/5.jpg' />
      </AvatarGroup>
    </div>
  )
}

export default TotalAvatar
