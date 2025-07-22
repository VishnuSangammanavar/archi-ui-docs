import React from 'react'
import { Alert, AlertTitle, AlertDescription } from 'archi-ui'

const TitleAlertVariant = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <Alert severity='success'>
        <AlertTitle variant='h1'>H1 Heading</AlertTitle> 
        <AlertDescription>This Alert uses h1 heading as Alert Title.</AlertDescription>
      </Alert>
      <Alert severity='info'>
        <AlertTitle variant='h2'>H2 Heading</AlertTitle>
        <AlertDescription>This Alert uses h1 heading as Alert Title.</AlertDescription>
      </Alert>
      <Alert severity='warning'>
        <AlertTitle variant='h3'>h3 Heading</AlertTitle>
        <AlertDescription>This Alert uses h1 heading as Alert Title.</AlertDescription>
      </Alert>
      <Alert severity='error'>
        <AlertTitle component='p'>P Component</AlertTitle>
        <AlertDescription>This Alert uses paragraph tag as Alert Title.</AlertDescription>
      </Alert>
    </div>
  )
}

export default TitleAlertVariant
