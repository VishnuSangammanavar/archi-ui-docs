import React from 'react'
import { Avatar } from 'elementx'

const AvatarSize = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Avatar size='lg' />
      <Avatar size='md' />
      <Avatar size='sm' />
    </div>
  )
}

export default AvatarSize
