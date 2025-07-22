import React from 'react'
import { IconButton } from 'archi-ui'
import { AlarmClock, ShoppingCart, Trash } from 'lucide-react'

const BasicIconButton = () => {
  return (
    <div className='flex items-center justify-center'>
      <IconButton>
        <Trash />
      </IconButton>
      <IconButton disabled>
        <Trash />
      </IconButton>
      <IconButton color='secondary'>
        <AlarmClock />
      </IconButton>
      <IconButton color='primary'>
        <ShoppingCart />
      </IconButton>
    </div>
  )
}

export default BasicIconButton
