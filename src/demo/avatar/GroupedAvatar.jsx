import React from 'react'
import { Avatar, AvatarGroup } from 'elementx'

const GroupedAvatar = () => {
  return (
    <div className="flex items-center justify-center">
      <AvatarGroup max={4}>
        <Avatar alt='Eren Yeager' src='/static/images/avatar/1.jpg' />
        <Avatar alt='Mikasa Ackerman' src='/static/images/avatar/2.jpg' />
        <Avatar alt='Armin' src='/static/images/avatar/3.jpg' />
        <Avatar alt='Levi Ackerman' src='/static/images/avatar/4.jpg' />
        <Avatar alt='Naruto' src='/static/images/avatar/5.jpg' />
      </AvatarGroup>
    </div>
  )
}

export default GroupedAvatar
