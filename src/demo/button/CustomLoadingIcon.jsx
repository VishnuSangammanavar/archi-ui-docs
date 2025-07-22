"use client"

import React, { useEffect, useState } from 'react'
import { Button, CircularProgress, Switch } from 'archi-ui'

const CustomLoadingIcon = () => {

  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000)
    return () => clearTimeout(timeout)
  })

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <div className='flex items-center justify-center gap-2'>
          <Switch onChange={() => setLoading(!loading)} checked={loading} />
          <p>loading</p>
      </div>
      <Button variant="filled" color='primary' loading={loading} onClick={() => setLoading(true)} loadingIndicator={<CircularProgress color='warning' size='sm' />}>
        Click me
      </Button>
    </div>
  )
}

export default CustomLoadingIcon
