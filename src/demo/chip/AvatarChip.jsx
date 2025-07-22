import React from 'react'
import { Avatar, Chip } from 'archi-ui'

const AvatarChip = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Chip avatar={<Avatar size='sm'>V</Avatar>} variant='filled'>Avatar</Chip>
      <Chip avatar={<Avatar size='sm' alt='logo' src='./images/header/logo.png' />} variant='outlined'>Avatar</Chip>
    </div>
  )
}

export default AvatarChip
