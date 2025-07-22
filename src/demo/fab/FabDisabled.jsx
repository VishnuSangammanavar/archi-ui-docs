import React from 'react'
import { Fab } from 'archi-ui'
import { Plus } from 'lucide-react'

const FabDisabled = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Fab>
        <Plus />
      </Fab>
      <Fab disabled>
        <Plus />
      </Fab>
    </div>
  )
}

export default FabDisabled
