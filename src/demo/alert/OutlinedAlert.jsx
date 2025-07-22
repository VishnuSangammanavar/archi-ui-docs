import React from 'react'
import { Alert, AlertDescription } from 'archi-ui'

const OutlinedAlert = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Alert severity='success' variant='outlined'>
        <AlertDescription>This is a success Alert.</AlertDescription>
      </Alert>
      <Alert severity='info' variant='outlined'>
        <AlertDescription>This is a info Alert.</AlertDescription>
      </Alert>
      <Alert severity='warning' variant='outlined'>
        <AlertDescription>This is a warning Alert.</AlertDescription>
      </Alert>
      <Alert severity='error' variant='outlined'>
        <AlertDescription>This is a error Alert.</AlertDescription>
      </Alert>
    </div>
  )
}

export default OutlinedAlert
