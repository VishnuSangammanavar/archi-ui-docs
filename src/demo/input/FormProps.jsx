import React from 'react'
import { FormControl, FormHelperText, Input, Label } from 'archi-ui'

const FormProps = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="flex flex-wrap justify-center gap-2">
        <FormControl>
          <Label required>First name</Label>
          <Input
            type='text'
            placeholder='Standard Required'
            required
            variant='standard'
            id="fname"
          />
        </FormControl>
        <FormControl>
          <Label disabled>First name</Label>
          <Input
            type='text'
            placeholder='Standard disabled'
            disabled
            variant='standard'
            id="fname"
          />
        </FormControl>
        <FormControl>
          <Label>Password</Label>
          <Input
            type='password'
            placeholder='Password'
            variant='standard'
            id="password"
          />
        </FormControl>
        <FormControl>
          <Label>Read only</Label>
          <Input
            type='text'
            placeholder='Read only'
            defaultValue="Read only"
            readOnly
            variant='standard'
            id="readonly"
          />
        </FormControl>
        <FormControl>
          <Label>Search</Label>
          <Input
            type='search'
            placeholder='search'
            variant='standard'
            id="search"
          />
        </FormControl>
        <FormControl>
          <Label>Helper Text</Label>
          <Input
            type='password'
            placeholder='Password'
            id="helpertext"
            defaultValue="Default Value"
            variant='standard'
          />
          <FormHelperText>Helper text</FormHelperText>
        </FormControl>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        <FormControl>
          <Label required>First name</Label>
          <Input
            type='text'
            placeholder='Outlined Required'
            required
            id="fname"
          />
        </FormControl>
        <FormControl>
          <Label disabled>First name</Label>
          <Input
            type='text'
            placeholder='Outlined disabled'
            disabled
            id="fname"
          />
        </FormControl>
        <FormControl>
          <Label>Password</Label>
          <Input
            type='password'
            placeholder='Password'
            id="password"
          />
        </FormControl>
        <FormControl>
          <Label>Read only</Label>
          <Input
            type='text'
            placeholder='Read only'
            defaultValue="Read only"
            readOnly
            variant='outlined'
            id="readonly"
          />
        </FormControl>
        <FormControl>
          <Label>Search</Label>
          <Input
            type='search'
            placeholder='search'
            variant='outlined'
            id="search"
          />
        </FormControl>
        <FormControl>
          <Label>Helper Text</Label>
          <Input
            type='password'
            placeholder='Password'
            id="helpertext"
            defaultValue="Default Value"
            variant='outlined'
          />
          <FormHelperText>Helper text</FormHelperText>
        </FormControl>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        <FormControl>
          <Label required>First name</Label>
          <Input
            type='text'
            placeholder='Filled Required'
            variant='filled'
            id="fname"
          />
        </FormControl>
        <FormControl>
          <Label disabled>First name</Label>
          <Input
            type='text'
            placeholder='Filled disabled'
            disabled
            variant='filled'
            id="fname"
          />
        </FormControl>
        <FormControl>
          <Label>Password</Label>
          <Input
            type='password'
            placeholder='Password'
            variant='filled'
            id="password"
          />
        </FormControl>
        <FormControl>
          <Label>Read only</Label>
          <Input
            type='text'
            placeholder='Read only'
            defaultValue="Read only"
            readOnly
            variant='filled'
            id="readonly"
          />
        </FormControl>
        <FormControl>
          <Label>Search</Label>
          <Input
            type='search'
            placeholder='search'
            variant='filled'
            id="search"
          />
        </FormControl>
        <FormControl>
          <Label>Helper Text</Label>
          <Input
            type='password'
            placeholder='Password'
            id="helpertext"
            defaultValue="Default Value"
            variant='filled'
          />
          <FormHelperText>Helper text</FormHelperText>
        </FormControl>
      </div>
    </div>
  )
}

export default FormProps
