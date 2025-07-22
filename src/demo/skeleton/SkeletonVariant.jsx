import React from 'react'
import { Skeleton } from 'archi-ui'

const SkeletonVariant = () => {
  return (
    <div className='flex flex-col items-start justify-center gap-2'>
      <Skeleton variant='text' />
      <Skeleton variant='circular' />
      <Skeleton variant='rounded' className='w-full h-16' />
      <Skeleton variant='rectangular' className='w-full h-16' />
    </div>
  )
}

export default SkeletonVariant
