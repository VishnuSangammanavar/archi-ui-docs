import React from 'react'
import { Input } from 'archi-ui'

const InputSize = () => {
  return (
    <div className='flex flex-col flex-wrap items-center justify-center gap-2'>
      <div className='flex flex-wrap items-center justify-center gap-2'>
        <Input type="text" variant="filled" placeholder="Medium" size='md' />
        <Input type="text" variant="filled" placeholder="Small" size='sm' />
      </div>
      <div className='flex flex-wrap items-center justify-center gap-2'>
        <Input type="text" variant="outlined" placeholder="Medium" size='md' />
        <Input type="text" variant="outlined" placeholder="Small" size='sm' />
      </div>
      <div className='flex flex-wrap items-center justify-center gap-2'>
        <Input type="text" variant="standard" placeholder="Medium" size='md' />
        <Input type="text" variant="standard" placeholder="Small" size='sm' />
      </div>
    </div>
  )
}

export default InputSize
