import React from 'react'
import { Input } from 'archi-ui'

const InputColor = () => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-2'>
      <div className="flex flex-wrap items-center gap-2">
        <Input type="text" placeholder='Outlined primary' variant='outlined' color='primary' />
        <Input type="text" placeholder='Filled secondary' variant='filled' color='secondary' />
        <Input type="text" placeholder='Standard info' variant='standard' color='info' />
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Input type="text" placeholder='Outlined warning' variant='outlined' color='warning' />
        <Input type="text" placeholder='Filled success' variant='filled' color='success' />
        <Input type="text" placeholder='Standard error' variant='standard' color='error' />
      </div>
    </div>
  )
}

export default InputColor
