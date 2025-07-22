import React from 'react'
import { FormControl, FormHelperText, Input, Label } from 'archi-ui'

const InputValidation = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="flex flex-wrap justify-center gap-2">
        <FormControl>
          <Label htmlFor="fname">First name</Label>
          <Input
            type='text'
            placeholder='Standard Error'
            defaultValue="Default Value"
            variant='standard'
            error
          />
        </FormControl>
        <FormControl>
          <Label htmlFor="fname">First name</Label>
          <Input
            type='text'
            placeholder='Standard Error with helper text'
            defaultValue="Default Value"
            variant='standard'
            error
          />
          <FormHelperText error>Incorrect entry.</FormHelperText>
        </FormControl>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        <FormControl>
          <Label htmlFor="fname">First name</Label>
          <Input
            type='text'
            placeholder='Standard Error'
            defaultValue="Default Value"
            variant='filled'
            error
          />
        </FormControl>
        <FormControl>
          <Label htmlFor="fname">First name</Label>
          <Input
            type='text'
            placeholder='Standard Error with helper text'
            defaultValue="Default Value"
            variant='filled'
            error
          />
          <FormHelperText error>Incorrect entry.</FormHelperText>
        </FormControl>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        <FormControl>
          <Label htmlFor="fname">First name</Label>
          <Input
            type='text'
            placeholder='Standard Error'
            defaultValue="Default Value"
            error
          />
        </FormControl>
        <FormControl>
          <Label htmlFor="fname">First name</Label>
          <Input
            type='text'
            placeholder='Standard Error with helper text'
            defaultValue="Default Value"
            error
          />
          <FormHelperText error>Incorrect entry.</FormHelperText>
        </FormControl>
      </div>
    </div>
  )
}

export default InputValidation
