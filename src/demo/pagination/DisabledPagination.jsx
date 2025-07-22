import React from 'react'
import { Pagination } from 'archi-ui'

const DisabledPagination = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Pagination totalPages={5} />
      <Pagination totalPages={5} disabled />
    </div>
  )
}

export default DisabledPagination
