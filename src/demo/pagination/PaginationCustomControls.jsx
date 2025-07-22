import React from 'react'
import { Pagination } from 'archi-ui'
import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react'

const PaginationCustomControls = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Pagination
        totalPages={8}
        variant='ghost'
        color='primary'
        previousIcon='Previous'
        nextIcon='Next'
      />
      <Pagination
        totalPages={8}
        variant='ghost'
        color='primary'
        previousIcon={<ChevronLeftCircle size={16} />}
        nextIcon={<ChevronRightCircle size={16} />}
      />
    </div>
  )
}

export default PaginationCustomControls