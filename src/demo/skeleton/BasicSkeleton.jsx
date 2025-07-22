import React from 'react'
import { Skeleton } from 'archi-ui'

const BasicSkeleton = () => {
  return (
    <div className='flex flex-col items-start justify-center gap-2'>
      <Skeleton variant='circular' />
      <Skeleton variant='text' />
    </div>
  )
}

export default BasicSkeleton
