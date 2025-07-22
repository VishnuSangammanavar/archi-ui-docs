import React from 'react'
import { Chip } from 'archi-ui'

const BasicChip = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Chip>Chip Filled</Chip>
      <Chip variant='outlined'>Chip Outlined</Chip>
      <Chip disabled>Chip Disabled</Chip>
    </div>
  )
}

export default BasicChip
