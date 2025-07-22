import React from 'react'
import { Fab } from 'archi-ui'
import { Heart, Pencil, Plus } from 'lucide-react'

const BasicFab = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Fab color='primary'>
        <Plus />
      </Fab>
      <Fab color='secondary'>
        <Pencil />
      </Fab>
      <Fab disabled>
        <Heart />
      </Fab>
    </div>
  )
}

export default BasicFab
