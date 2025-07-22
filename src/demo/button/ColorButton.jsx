import React from 'react'
import { Button } from 'archi-ui'

const ColorButton = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className='flex flex-wrap items-center justify-center gap-2'>
        <Button variant="filled" color="primary">Primary</Button>
        <Button variant="filled" color="secondary">Secondary</Button>
        <Button variant="filled" color="info">Info</Button>
        <Button variant="filled" color="warning">Warning</Button>
        <Button variant="filled" color="success">Success</Button>
        <Button variant="filled" color="error">Error</Button>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-2'>
        <Button variant="outlined" color="primary">Primary</Button>
        <Button variant="outlined" color="secondary">Secondary</Button>
        <Button variant="outlined" color="info">Info</Button>
        <Button variant="outlined" color="warning">Warning</Button>
        <Button variant="outlined" color="success">Success</Button>
        <Button variant="outlined" color="error">Error</Button>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-2'>
        <Button variant="ghost" color="primary">Primary</Button>
        <Button variant="ghost" color="secondary">Secondary</Button>
        <Button variant="ghost" color="info">Info</Button>
        <Button variant="ghost" color="warning">Warning</Button>
        <Button variant="ghost" color="success">Success</Button>
        <Button variant="ghost" color="error">Error</Button>
      </div>
    </div>
  )
}

export default ColorButton