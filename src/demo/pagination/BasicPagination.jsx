import React from 'react'
import { Pagination } from 'archi-ui'

const BasicPagination = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <Pagination totalPages={10} />
      <Pagination totalPages={10} color='primary' />
      <Pagination totalPages={10} color='secondary' />
      <Pagination totalPages={10} disabled />
    </div>
  )
}

export default BasicPagination