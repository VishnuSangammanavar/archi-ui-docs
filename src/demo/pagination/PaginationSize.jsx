import React from 'react'
import { Pagination } from 'archi-ui'

const PaginationSize = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Pagination
        totalPages={8}
        size='sm'
        color='primary'
      />
      <Pagination
        totalPages={8}
        size='md'
        color='primary'
      />
      <Pagination
        totalPages={8}
        size='lg'
        color='primary'
      />
    </div>
  )
}

export default PaginationSize
