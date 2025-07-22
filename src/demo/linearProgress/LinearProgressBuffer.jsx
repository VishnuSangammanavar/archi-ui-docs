"use client"

import React, { useEffect, useState } from 'react'
import { LinearProgress, Typography } from 'archi-ui'

const LinearProgressBuffer = () => {

  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);

  const progressRef = React.useRef(() => {});

  useEffect(() => {
    progressRef.current = () => {
      if (progress === 100) {
        setProgress(0);
        setBuffer(10);
      }
      else {
        setProgress(progress + 1);
        if (buffer < 100 && progress % 5 === 0) {
          const newBuffer = buffer + 1 + Math.random() * 10;
          setBuffer(newBuffer > 100 ? 100 : newBuffer);
        }
      }
    }
  });

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 200);
  
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center justify-center gap-2'>
        <LinearProgress variant='buffer' value={progress} bufferValue={buffer} />
        <Typography>{`${Math.round(progress)}%`}</Typography>
      </div>
      <div className='flex items-center justify-center gap-2'>
        <LinearProgress color='secondary' variant='buffer' value={50} bufferValue={60} />
        <Typography>50%</Typography>
      </div>
    </div>
  )
}

export default LinearProgressBuffer
