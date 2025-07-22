import React from 'react'
import { Skeleton } from 'archi-ui'

const SkeletonAnimation = () => {
  return (
    <div className='flex flex-col items-start justify-center gap-2'>
      <Skeleton animation='pulse' variant='rectangular' className='h-16' />
      <Skeleton animation='wave' variant='rectangular' className='h-16' />
      <Skeleton animation='none' variant='rectangular' className='h-16' />
    </div>
  )
}

export default SkeletonAnimation
