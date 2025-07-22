import React from 'react'
import { IconButton } from 'archi-ui'
import { Facebook } from 'lucide-react'

const HyperlinkIconButton = () => {
  return (
    <div className='flex items-center justify-center'>
      <IconButton component='a' href='#' color='primary'><Facebook /></IconButton>
    </div>
  )
}

export default HyperlinkIconButton