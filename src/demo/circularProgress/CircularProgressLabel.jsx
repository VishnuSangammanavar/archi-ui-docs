"use client"

import React, { useEffect, useState } from 'react'
import { CircularProgress, Typography } from 'archi-ui'

const CircularProgressLabel = () => {

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800)
  
    return () => {
      clearInterval(timer)
    }
  }, []);

  return (
    <div className='relative inline-flex items-center justify-center'>
      <CircularProgress variant='determinate' value={progress} color='primary' />
      <div className='absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center'>
        <Typography variant='body2'>{`${Math.round(progress)}%`}</Typography>
      </div>
    </div>
  )
}

export default CircularProgressLabel
