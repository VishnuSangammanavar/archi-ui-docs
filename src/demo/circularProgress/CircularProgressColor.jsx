import React from 'react'
import { CircularProgress } from 'archi-ui'

const BasicCircularProgress = () => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-2'>
      <CircularProgress color='default' />
      <CircularProgress color='primary' />
      <CircularProgress color='secondary' />
      <CircularProgress color='info' />
      <CircularProgress color='warning' />
      <CircularProgress color='success' />
      <CircularProgress color='error' />
    </div>
  )
}

export default BasicCircularProgress
