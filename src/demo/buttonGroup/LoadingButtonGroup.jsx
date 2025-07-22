import React from 'react'
import { Button, ButtonGroup } from 'archi-ui'
import { SaveIcon } from 'lucide-react'

const LoadingButtonGroup = () => {
  return (
    <div className='flex items-center justify-center'>
      <ButtonGroup variant="outlined" aria-label="Loading button group">
        <Button>Submit</Button>
        <Button>Fetch data</Button>
        <Button loading loadingPosition="start" startIcon={<SaveIcon />}>
          Save
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default LoadingButtonGroup
