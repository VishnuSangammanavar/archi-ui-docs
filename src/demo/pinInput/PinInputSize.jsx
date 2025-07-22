import React from 'react'
import { PinInput } from 'archi-ui'

const PinInputSize = () => {
  return (
    <div className='flex flex-col flex-wrap items-center justify-center gap-2'>
      <PinInput variant="filled" placeholder="Small" size='sm' />
      <PinInput variant="filled" placeholder="Medium" size='md' />
    </div>
  )
}

export default PinInputSize
