"use client"

import React, { useState }  from 'react'
import { Pagination } from 'archi-ui'

const ControlledPagination = () => {

  const [page, setCurrentPage] = useState(3);

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="flex items-center justify-center">
      <Pagination
        totalPages={8}
        variant='ghost'
        color='secondary'
        page={page}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default ControlledPagination