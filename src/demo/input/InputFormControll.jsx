import React from 'react'
import { FormControl, FormHelperText, Input, Label } from 'archi-ui'

const InputFormControll = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <div className="flex flex-wrap justify-center gap-2">
        <FormControl variant='standard' required>
          <Label>First name</Label>
          <Input
            type='text'
            placeholder='Standard Required'
            id="fname"
          />
        </FormControl>
        <FormControl variant='standard' disabled>
          <Label>First name</Label>
          <Input
            type='text'
            placeholder='Standard disabled'
            id="fname"
          />
        </FormControl>
        <FormControl variant='standard' error>
          <Label>Helper Text</Label>
          <Input
            type='text'
            placeholder='Standard error'
            id="helpertext"
            defaultValue="Default Value"
          />
          <FormHelperText>Helper text</FormHelperText>
        </FormControl>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        <FormControl variant='outlined' required>
          <Label>First name</Label>
          <Input
            type='text'
            placeholder='Outlined Required'
            id="fname"
          />
        </FormControl>
        <FormControl variant='outlined' disabled>
          <Label>First name</Label>
          <Input
            type='text'
            placeholder='Outlined disabled'
            id="fname"
          />
        </FormControl>
        <FormControl variant='outlined' error>
          <Label>Helper Text</Label>
          <Input
            type='text'
            placeholder='Standard error'
            id="helpertext"
            defaultValue="Default Value"
            variant='outlined'
          />
          <FormHelperText>Helper text</FormHelperText>
        </FormControl>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        <FormControl variant='filled' required>
          <Label>First name</Label>
          <Input
            type='text'
            placeholder='Filled Required'
            id="fname"
          />
        </FormControl>
        <FormControl variant='filled' disabled>
          <Label>First name</Label>
          <Input
            type='text'
            placeholder='Filled disabled'
            id="fname"
          />
        </FormControl>
        <FormControl variant='filled' error>
          <Label>Helper Text</Label>
          <Input
            type='text'
            placeholder='Standard error'
            id="helpertext"
            defaultValue="Default Value"
          />
          <FormHelperText>Helper text</FormHelperText>
        </FormControl>
      </div>
    </div>
  )
}

export default InputFormControll
