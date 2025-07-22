import React from 'react'
import { Input, InputAdornment, InputGroup } from 'archi-ui'

const InputAddornments = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <InputGroup className='h-12'>
        <InputAdornment>
          https://
        </InputAdornment>
        <Input type="text" placeholder='Default Textfield' variant='outlined' />
        <InputAdornment>
          .com
        </InputAdornment>
      </InputGroup>
      <InputGroup className='h-12'>
        <InputAdornment>
          +91
        </InputAdornment>
        <Input type="text" placeholder='Phone number' variant='outlined' />
      </InputGroup>
    </div>
  )
}

export default InputAddornments
