import React from 'react'
import { PinInput } from 'archi-ui'

const PinInputVariant = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <PinInput length={4} variant='outlined' value={'1234'} />
      <PinInput length={4} variant='filled' value={'1234'} />
      <PinInput length={4} variant='standard' value={'1234'} />
    </div>
  )
}

export default PinInputVariant
