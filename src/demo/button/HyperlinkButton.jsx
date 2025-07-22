import React from 'react'
import { Button } from 'archi-ui'

const HyperlinkButton = () => {
  return (
    <div className='flex items-center justify-center'>
      <Button variant='link' component='a' href='#'>Link</Button>
    </div>
  )
}

export default HyperlinkButton