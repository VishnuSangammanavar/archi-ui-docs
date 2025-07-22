"use client"

import React from 'react'
import { Chip } from 'archi-ui'

const ChipClickable = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Chip variant='filled' onClick={() => {}} clickable>Clickable</Chip>
      <Chip variant='outlined' onClick={() => {}} clickable>Clickable</Chip>
    </div>
  )
}

export default ChipClickable
