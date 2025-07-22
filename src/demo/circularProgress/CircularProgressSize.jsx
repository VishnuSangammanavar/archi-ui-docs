import React from 'react'
import { CircularProgress } from 'archi-ui'

const CircularProgressSize = () => {
  return (
    <div className='flex items-center justify-center gap-2'>
      <CircularProgress size='lg' color='primary' />
      <CircularProgress size='md' color='primary' />
      <CircularProgress size='sm' color='primary' />
    </div>
  )
}

export default CircularProgressSize
