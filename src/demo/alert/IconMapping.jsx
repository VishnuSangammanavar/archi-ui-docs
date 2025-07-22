import React from 'react'
import { Alert } from 'archi-ui'
import { CheckCircle } from 'lucide-react'

const IconMapping = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <Alert
        severity='warning'
        iconMapping={{
          warning: <CheckCircle />,
        }}
      >
        This warning Alert uses `iconMapping` to override the default icon.
      </Alert>
    </div>
  )
}

export default IconMapping