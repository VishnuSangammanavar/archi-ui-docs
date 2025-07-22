import React from 'react'
import { Chip } from 'archi-ui'

const ChipColor = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="flex items-center justify-center gap-2">
        <Chip variant='filled' color='default' clickable>Default</Chip>
        <Chip variant='filled' color='primary' clickable>Primary</Chip>
        <Chip variant='filled' color='secondary' clickable>Secondary</Chip>
        <Chip variant='filled' color='info' clickable>Info</Chip>
        <Chip variant='filled' color='warning' clickable>Warning</Chip>
        <Chip variant='filled' color='success' clickable>Success</Chip>
        <Chip variant='filled' color='error' clickable>Error</Chip>
      </div>
      <div className="flex items-center justify-center gap-2">
      <Chip variant='outlined' color='default' clickable>Default</Chip>
        <Chip variant='outlined' color='primary' clickable>Primary</Chip>
        <Chip variant='outlined' color='secondary' clickable>Secondary</Chip>
        <Chip variant='outlined' color='info' clickable>Info</Chip>
        <Chip variant='outlined' color='warning' clickable>Warning</Chip>
        <Chip variant='outlined' color='success' clickable>Success</Chip>
        <Chip variant='outlined' color='error' clickable>Error</Chip>
      </div>
    </div>
  )
}

export default ChipColor
