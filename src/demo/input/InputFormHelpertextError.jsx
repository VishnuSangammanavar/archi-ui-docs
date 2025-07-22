import React from 'react'
import { FormHelperText, Input } from 'archi-ui'

const InputFormHelpertextError = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <div className="flex flex-col">
        <Input type="text" placeholder='Filled' variant='filled' error />
        <FormHelperText error>Helper text</FormHelperText>
      </div>
      <div className="flex flex-col">
        <Input type="text" placeholder='Outlined' variant='outlined' error />
        <FormHelperText error>Helper text</FormHelperText>
      </div>
      <div className="flex flex-col">
        <Input type="text" placeholder='Standard' variant='standard' error />
        <FormHelperText error>Helper text</FormHelperText>
      </div>
    </div>
  )
}

export default InputFormHelpertextError
