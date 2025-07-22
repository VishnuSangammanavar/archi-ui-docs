"use client"

import React, { useEffect, useState } from 'react'
import { CircularProgress } from 'archi-ui'

const CircularProgressDeterminate = () => {

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
    <div className='flex items-center justify-center gap-2'>
      <CircularProgress variant='determinate' color='primary' value={25} />
      <CircularProgress variant='determinate' color='primary' value={50} />
      <CircularProgress variant='determinate' color='primary' value={75} />
      <CircularProgress variant='determinate' color='primary' value={100} />
      <CircularProgress variant='determinate' color='primary' value={progress} />
    </div>
  )
}

export default CircularProgressDeterminate
