import React from 'react'
import { Input } from 'archi-ui'

const InputFullwidth = () => {
  return (
    <div className="flex items-center gap-2 w-full">
      <Input type="text" placeholder='Medium' variant='filled' size='md' fullwidth />
      <Input type="text" placeholder='Small' variant='filled' size='sm' fullwidth />
    </div>
  )
}

export default InputFullwidth
