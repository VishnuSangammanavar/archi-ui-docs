import React from 'react'
import { Alert, AlertDescription } from 'archi-ui'

const AlertSeverity = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <Alert severity='success'>
        <AlertDescription>This is a success Alert.</AlertDescription>
      </Alert>
      <Alert severity='info'>
        <AlertDescription>This is a info Alert.</AlertDescription>
      </Alert>
      <Alert severity='warning'>
        <AlertDescription>This is a warning Alert.</AlertDescription>
      </Alert>
      <Alert severity='error'>
        <AlertDescription>This is a error Alert.</AlertDescription>
      </Alert>
    </div>
  )
}

export default AlertSeverity
