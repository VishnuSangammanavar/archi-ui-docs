import React from 'react'
import { Chip } from 'archi-ui'

const ChipSize = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Chip color='primary' size='md'>Medium</Chip>
      <Chip color='secondary' size='sm'>Small</Chip>
    </div>
  )
}

export default ChipSize
