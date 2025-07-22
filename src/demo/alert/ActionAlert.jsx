"use client"

import React from 'react'
import { Alert, AlertDescription, Button } from 'archi-ui'

const ActionAlert = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <Alert severity='warning' onClose={() => {}}>
        <AlertDescription>This Aleet displays the default close icon.</AlertDescription>
      </Alert>
      <Alert severity='success' action={<Button size='sm'>undo</Button>}>
        <AlertDescription>This Alert uses a button component for its action.</AlertDescription>
      </Alert>
    </div>
  )
}

export default ActionAlert
