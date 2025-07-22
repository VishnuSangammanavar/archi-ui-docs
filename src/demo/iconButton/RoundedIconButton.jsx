import React from 'react'
import { IconButton } from 'archi-ui'
import { ShoppingCart } from 'lucide-react'

const RoundedIconButton = () => {
  return (
    <div className='flex items-center justify-center gap-2'>
      <IconButton color='primary' rounded='none'>
        <ShoppingCart />
      </IconButton>
      <IconButton color='primary' rounded='sm'>
        <ShoppingCart />
      </IconButton>
      <IconButton color='primary' rounded='md'>
        <ShoppingCart />
      </IconButton>
      <IconButton color='primary' rounded='lg'>
        <ShoppingCart />
      </IconButton>
      <IconButton color='primary' rounded='full'>
        <ShoppingCart />
      </IconButton>
    </div>
  )
}

export default RoundedIconButton
