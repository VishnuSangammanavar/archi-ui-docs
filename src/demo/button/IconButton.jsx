import React from 'react'
import { Button } from 'archi-ui'
import { Save, Trash } from 'lucide-react'

const IconButton = () => {
  return (
    <div className='flex items-center justify-center gap-2'>
      <Button variant="outlined" startIcon={<Trash />}>Delete</Button>
      <Button variant="filled" endIcon={<Save />}>Save</Button>
    </div>
  )
}

export default IconButton
