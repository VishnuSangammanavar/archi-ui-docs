import React from 'react'
import { Avatar } from 'archi-ui'

const LetterAvatar = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Avatar>H</Avatar>
      <Avatar className='bg-primary'>N</Avatar>
      <Avatar className='bg-secondary'>P</Avatar>
      <Avatar className='bg-success'>R</Avatar>
    </div>
  )
}

export default LetterAvatar
