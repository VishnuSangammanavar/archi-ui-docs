import React from 'react'
import { Pagination } from 'archi-ui'

const PaginationVariant = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Pagination variant='ghost' totalPages={5} color='primary' />
      <Pagination variant='outlined' totalPages={5} color='primary' />
    </div>
  )
}

export default PaginationVariant
