import React from 'react'
import { FormHelperText, Input } from 'archi-ui'

const InputFormHelpertext = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col">
        <Input type="text" placeholder='Outlined' variant='outlined' />
        <FormHelperText>Helper text</FormHelperText>
      </div>
    </div>
  )
}

export default InputFormHelpertext
