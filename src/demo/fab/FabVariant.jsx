import React from 'react'
import { Fab } from 'archi-ui'
import { ChevronRight, Phone, Plus } from 'lucide-react'

const FabVariant = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Fab variant='circular' color='primary'>
        <Plus />
      </Fab>
      <Fab variant='circular' color='success'>
        <Phone />
      </Fab>
      <Fab variant='extended'>
        <ChevronRight />
        Extended
      </Fab>
      <Fab variant='circular' disabled>
        <Plus />
      </Fab>
    </div>
  )
}

export default FabVariant
