import React from 'react'
import { Avatar } from 'archi-ui'

const AvatarSize = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Avatar alt='Naruto' src='/naruto-uzumaki.webp' size='lg' />
      <Avatar alt='Naruto' src='/naruto-uzumaki.webp' size='md' />
      <Avatar alt='Naruto' src='/naruto-uzumaki.webp' size='sm' />
    </div>
  )
}

export default AvatarSize
