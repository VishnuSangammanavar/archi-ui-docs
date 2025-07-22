import React from 'react'
import { BarLoader } from 'archi-ui'

const BarLoaderColor = () => {
  return (
    <div className='flex items-center justify-center gap-4'>
      <BarLoader color='default' />
      <BarLoader color='primary' />
      <BarLoader color='secondary' />
      <BarLoader color='info' />
      <BarLoader color='warning' />
      <BarLoader color='success' />
      <BarLoader color='error' />
    </div>
  )
}

export default BarLoaderColor
