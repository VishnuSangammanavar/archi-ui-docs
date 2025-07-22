import React from 'react'
import { Breadcrumbs, Link, Typography } from 'archi-ui'
import { ChevronRight } from 'lucide-react'

const CustomeSeparator = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <Breadcrumbs separator='-'>
        <Link href='/' underline='hover'>Home</Link>
        <Link href='/about' underline='hover'>About</Link>
        <Link href='/services' underline='hover'>Services</Link>
        <Typography>Blog</Typography>
      </Breadcrumbs>
      <Breadcrumbs separator={<ChevronRight />}>
        <Link href='/' underline='hover'>Home</Link>
        <Link href='/about' underline='hover'>About</Link>
        <Link href='/services' underline='hover'>Services</Link>
        <Typography>Blog</Typography>
      </Breadcrumbs>
    </div>
  )
}

export default CustomeSeparator
