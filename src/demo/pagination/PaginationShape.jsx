import React from 'react'
import { Pagination } from 'archi-ui'

const PaginationShape = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Pagination
        totalPages={8}
        shape='pill'
        variant='outlined'
      />
      <Pagination
        totalPages={8}
        shape='pill'
        variant='ghost'
      />
      <Pagination
        totalPages={8}
        shape='rounded'
        variant='outlined'
      />
      <Pagination
        totalPages={8}
        shape='rounded'
        variant='ghost'
      />
      <Pagination
        totalPages={8}
        shape='square'
        variant='outlined'
      />
      <Pagination
        totalPages={8}
        shape='square'
        variant='ghost'
      />
    </div>
  )
}

export default PaginationShape
