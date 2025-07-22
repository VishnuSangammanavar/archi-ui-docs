import React from 'react'
import { Fab } from 'archi-ui'
import { Plus } from 'lucide-react'

const FabColor = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Fab color='default'>
        <Plus />
      </Fab>
      <Fab color='primary'>
        <Plus />
      </Fab>
      <Fab color='secondary'>
        <Plus />
      </Fab>
      <Fab color='info'>
        <Plus />
      </Fab>
      <Fab color='success'>
        <Plus />
      </Fab>
      <Fab color='warning'>
        <Plus />
      </Fab>
      <Fab color='error'>
        <Plus />
      </Fab>
    </div>
  )
}

export default FabColor
