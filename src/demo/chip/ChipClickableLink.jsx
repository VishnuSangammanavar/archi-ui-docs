import React from 'react'
import { Chip } from 'archi-ui'

const ChipClickableLink = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Chip variant='filled' component={'a'} href="#" clickable>Clickable link</Chip>
      <Chip variant='outlined' component={'a'} href="#" clickable>Clickable link</Chip>
    </div>
  )
}

export default ChipClickableLink
