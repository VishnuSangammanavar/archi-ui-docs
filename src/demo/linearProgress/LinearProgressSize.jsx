import React from 'react'
import { LinearProgress } from 'archi-ui'

const LinearProgressSize = () => {
  return (
    <div className='flex flex-col gap-2'>
      <LinearProgress variant='buffer' size='sm' value={50} bufferValue={55} color='success' />
      <LinearProgress variant='buffer' size='md' value={50} bufferValue={55} color='success' />
      <LinearProgress variant='buffer' size='lg' value={50} bufferValue={55} color='success' />
    </div>
  )
}

export default LinearProgressSize
