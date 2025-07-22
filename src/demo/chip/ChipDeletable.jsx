"use client"

import React from 'react'
import { Chip } from 'archi-ui'

const ChipDeletable = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Chip variant='filled' onDelete={() => {}}>Deletable</Chip>
      <Chip variant='outlined' onDelete={() => {}}>Deletable</Chip>
    </div>
  )
}

export default ChipDeletable
