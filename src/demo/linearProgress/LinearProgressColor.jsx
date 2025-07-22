import React from 'react'
import { LinearProgress } from 'archi-ui'

const LinearProgressColor = () => {
  return (
    <div className='flex flex-col gap-2'>
      <LinearProgress color='primary' />
      <LinearProgress color='secondary' />
      <LinearProgress color='info' />
      <LinearProgress color='warning' />
      <LinearProgress color='success' />
      <LinearProgress color='error' />
    </div>
  )
}

export default LinearProgressColor
