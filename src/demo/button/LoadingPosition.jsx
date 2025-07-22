"use client"

import React, { useState } from 'react'
import { Button, Switch } from 'archi-ui'
import { Save, SendHorizonal, Trash } from 'lucide-react'

const LoadingButton = () => {

  const [loading, setLoading] = useState(true)

  const handleClick = () => {
    setLoading(!loading);
  }

  return (
    <div className='flex flex-col items-center justify-center gap-6'>
      <div className='flex items-center justify-center gap-2'>
        <Switch onChange={() => setLoading(!loading)} checked={loading} />
        <p>loading</p>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-2'>
        <Button variant='outlined' loading={loading} onClick={handleClick} disabled>
          Disabled
        </Button>
        <Button variant='filled' color='primary' onClick={handleClick} loading={loading} loadingIndicator='Loading...'>
          Fetch Data
        </Button>
        <Button variant='outlined' color='secondary' startIcon={<Save />} onClick={handleClick} loading={loading} loadingPosition='start'>
          Save
        </Button>
        <Button variant='filled' color='secondary' fullwidth startIcon={<SendHorizonal />} onClick={handleClick} loading={loading} loadingPosition='start'>
          Full width with start icon
        </Button>
        <Button variant='outlined' color='info' fullwidth endIcon={<SendHorizonal />} onClick={handleClick} loading={loading} loadingPosition='end'>
          Full width with end icon
        </Button>
        <Button variant='outlined' color='warning' onClick={handleClick} loading={loading} loadingPosition='start'>
          Submit
        </Button>
        <Button variant='filled' color='success' onClick={handleClick} loading={loading} loadingPosition='end'>
          Submit
        </Button>
        <Button variant='outlined' color='error' startIcon={<Save />} onClick={handleClick} loading={loading} loadingPosition='end'>
          Save
        </Button>
        <Button variant='outlined' color='error' endIcon={<Trash />} onClick={handleClick} loading={loading} loadingPosition='start'>
          Delete
        </Button>
      </div>
    </div>
  )
}

export default LoadingButton
