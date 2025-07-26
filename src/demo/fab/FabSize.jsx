import React from 'react'
import { Fab } from 'archi-ui'
import { ChevronRight, Plus } from 'lucide-react'

const FabSize = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex items-center justify-center gap-2">
        <Fab color='secondary' size='sm'>
          <Plus />
        </Fab>
        <Fab color='secondary' size='md'>
          <Plus />
        </Fab>
        <Fab color='secondary' size='lg'>
          <Plus />
        </Fab>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Fab color='primary' variant='extended' size='sm'>
          <ChevronRight />
          Navigate
        </Fab>
        <Fab color='primary' variant='extended' size='md'>
          <ChevronRight />
          Navigate
        </Fab>
        <Fab color='primary' variant='extended' size='lg'>
          <ChevronRight />
          Navigate
        </Fab>
      </div>
    </div>
  )
}

export default FabSize
