import React from 'react'
import { Alert, AlertDescription } from 'archi-ui'
import { CheckCheck } from 'lucide-react'

const IconAlert = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <Alert icon={<CheckCheck />} severity='success'>
        <AlertDescription>This success Alert has a custom icon.</AlertDescription>
      </Alert>
      <Alert icon={false} severity='success'>
        <AlertDescription>This Alert has no icon</AlertDescription>
      </Alert>
    </div>
  )
}

export default IconAlert
