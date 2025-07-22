"use client"

import React from 'react'
import { Chip } from 'archi-ui'
import { DeleteIcon, Trash2 } from 'lucide-react'

const ChipCustomeDelete = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Chip variant='filled' onDelete={() => {}} deleteIcon={<DeleteIcon />}>Custome Delete Icon</Chip>
      <Chip variant='outlined' onDelete={() => {}} deleteIcon={<Trash2 />}>Custome Delete Icon</Chip>
    </div>
  )
}

export default ChipCustomeDelete
