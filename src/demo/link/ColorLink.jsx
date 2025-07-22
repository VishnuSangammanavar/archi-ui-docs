import React from 'react'
import { Link } from 'archi-ui'

const ColorLink = () => {
  return (
    <div className='flex items-center justify-center gap-2'>
      <Link href='#' underline='hover' color='primary'>Click me</Link>
      <Link href='#' underline='hover' color='secondary'>Click me</Link>
      <Link href='#' underline='hover' color='info'>Click me</Link>
      <Link href='#' underline='hover' color='warning'>Click me</Link>
      <Link href='#' underline='hover' color='success'>Click me</Link>
      <Link href='#' underline='hover' color='error'>Click me</Link>
    </div>
  )
}

export default ColorLink