import React from 'react'
import { Breadcrumbs, Link, Typography } from 'archi-ui'

const BasicBreadcrumbs = () => {
  return (
    <div className='flex items-center justify-center'>
      <Breadcrumbs>
        <Link href='/' underline='hover'>Home</Link>
        <Link href='/about' underline='hover'>About</Link>
        <Link href='/services' underline='hover'>Services</Link>
        <Typography>Blog</Typography>
      </Breadcrumbs>
    </div>
  )
}

export default BasicBreadcrumbs
