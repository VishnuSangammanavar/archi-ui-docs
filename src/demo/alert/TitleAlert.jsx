import React from 'react'
import { Alert, AlertTitle, AlertDescription } from 'archi-ui'

const TitleAlert = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <Alert severity='success'>
        <AlertTitle>Success</AlertTitle> 
        <AlertDescription>This is a success Alert with an encouraging title.</AlertDescription>
      </Alert>
      <Alert severity='info'>
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>This is a info Alert with an information title.</AlertDescription>
      </Alert>
      <Alert severity='warning'>
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>This is a warning Alert with an cautious title.</AlertDescription>
      </Alert>
      <Alert severity='error'>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>This is a error Alert with an scary title.</AlertDescription>
      </Alert>
    </div>
  )
}

export default TitleAlert
