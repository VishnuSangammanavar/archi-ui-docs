"use client"

import React from 'react'
import { Chip } from 'archi-ui'

const ChipClickableDeletable = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Chip variant='filled' clickable onDelete={() => {}} onClick={() => {}}>Clickable and Deletable</Chip>
      <Chip variant='outlined' clickable onDelete={() => {}} onClick={() => {}}>Clickable and Deletable</Chip>
    </div>
  )
}

export default ChipClickableDeletable
