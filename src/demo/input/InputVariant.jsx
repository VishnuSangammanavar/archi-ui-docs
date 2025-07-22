import React from 'react'
import { Input } from 'archi-ui'

const InputVariant = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Input type="text" variant="filled" placeholder="Filled" />
      <Input type="text" variant="outlined" placeholder="Outlined" />
      <Input type="text" variant="standard" placeholder="Standard" />
    </div>
  )
}

export default InputVariant
