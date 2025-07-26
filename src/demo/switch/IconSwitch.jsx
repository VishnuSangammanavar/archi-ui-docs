import React from 'react'
import { Switch } from 'archi-ui'
import { Moon, SunMedium } from 'lucide-react'

const IconSwitch = () => {
  return (
    <div className="flex items-center justify-center">
      <Switch color='info' variant='standard' icon={<Moon className='text-black' />} checkedIcon={<SunMedium className='text-black' />} />
    </div>
  )
}

export default IconSwitch