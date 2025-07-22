import React from 'react'
import { Pagination } from 'archi-ui'

const PaginationRange = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Pagination
        totalPages={20}
        defaultPage={10}
        color='primary'
        siblingCount={1}
        boundaryCount={1}
      />
      <Pagination
        totalPages={20}
        defaultPage={10}
        color='secondary'
        siblingCount={0}
      />
      <Pagination
        totalPages={20}
        defaultPage={10}
        color='primary'
        siblingCount={0}
        boundaryCount={2}
      />
      <Pagination
        totalPages={20}
        defaultPage={10}
        color='secondary'
        siblingCount={1}
        boundaryCount={2}
      />
      <Pagination
        totalPages={20}
        defaultPage={10}
        color='primary'
        siblingCount={2}
        boundaryCount={3}
      />
    </div>
  )
}

export default PaginationRange
