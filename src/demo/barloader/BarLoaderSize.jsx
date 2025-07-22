import React from 'react'
import { BarLoader } from 'archi-ui'

const BarLoaderSize = () => {
  return (
    <div className='flex items-center justify-center gap-4'>
      <BarLoader size='lg' color='primary' />
      <BarLoader size='md' color='primary' />
      <BarLoader size='sm' color='primary' />
    </div>
  )
}

export default BarLoaderSize
