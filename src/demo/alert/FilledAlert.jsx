import React from 'react'
import { Alert, AlertDescription } from 'archi-ui'

const FilledAlert = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Alert severity='success' variant='filled'>
        <AlertDescription>This is a success Alert.</AlertDescription>
      </Alert>
      <Alert severity='info' variant='filled'>
        <AlertDescription>This is a info Alert.</AlertDescription>
      </Alert>
      <Alert severity='warning' variant='filled'>
        <AlertDescription>This is a warning Alert.</AlertDescription>
      </Alert>
      <Alert severity='error' variant='filled'>
        <AlertDescription>This is a error Alert.</AlertDescription>
      </Alert>
    </div>
  )
}

export default FilledAlert
