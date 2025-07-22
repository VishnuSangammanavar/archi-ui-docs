import React from 'react'
import { CircularProgress } from 'archi-ui'

const CircularProgressIndeterminate = () => {
  return (
    <div className='flex items-center justify-center'>
      <CircularProgress variant='indeterminate' color='primary' />
    </div>
  )
}

export default CircularProgressIndeterminate
