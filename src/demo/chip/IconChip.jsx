import React from 'react'
import { Chip } from 'archi-ui'
import { Check, Puzzle } from 'lucide-react'

const IconChip = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Chip icon={<Check />} variant='filled'>Icon</Chip>
      <Chip icon={<Puzzle />} variant='outlined'>Icon</Chip>
    </div>
  )
}

export default IconChip
