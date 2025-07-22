import React from 'react'
import { Pagination } from 'archi-ui'
import { ChevronFirst, ChevronLast } from 'lucide-react'

const PaginationControls = () => {
  return (
    <div className="flex items-center justify-center">
      <Pagination
        totalPages={8}
        variant='ghost'
        color='primary'
        showFirstButton
        showLastButton
        firstButtonIcon={<ChevronFirst size={16} />}
        lastButtonIcon={<ChevronLast size={16} />}
      />
    </div>
  )
}

export default PaginationControls
