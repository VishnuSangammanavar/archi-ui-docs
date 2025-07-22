"use client"

import React, { useEffect, useState } from 'react'
import { LinearProgress, Typography } from 'archi-ui'

const LinearProgressDeterminate = () => {

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100)
      })
    }, 500);
  
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center justify-center gap-2'>
        <LinearProgress variant='determinate' value={progress} />
        <Typography>{`${Math.round(progress)}%`}</Typography>
      </div>
      <div className='flex items-center justify-center gap-2'>
        <LinearProgress color='secondary' variant='determinate' value={50} />
        <Typography>50%</Typography>
      </div>
    </div>
  )
}

export default LinearProgressDeterminate
