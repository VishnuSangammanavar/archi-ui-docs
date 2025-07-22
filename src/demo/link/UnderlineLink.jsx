import React from 'react'
import { Link } from 'archi-ui'

const UnderlineLink = () => {
  return (
    <div className='flex items-center justify-center gap-2'>
      <Link href='#' underline='none'>Underline-none</Link>
      <Link href='#' underline='hover'>Underline on hover</Link>
      <Link href='#' underline='always'>Underline always</Link>
    </div>
  )
}

export default UnderlineLink
