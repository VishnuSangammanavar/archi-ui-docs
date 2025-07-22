import React from 'react'
import { Breadcrumbs, Link, Typography } from 'archi-ui'
import { Home, ServerIcon, TreePalm, User } from 'lucide-react'

const CustomeSeparator = () => {
  return (
    <div className='flex items-center justify-center gap-2'>
      <Breadcrumbs>
        <Link href='/' underline='hover' className='flex gap-2'>
          <Home />
          Home
        </Link>
        <Link href='/about' underline='hover' className='flex gap-2'>
          <User />
          About
        </Link>
        <Link href='/services' underline='hover' className='flex gap-2'>
          <ServerIcon />
          Services
        </Link>
        <Typography className='flex gap-2'>
          <TreePalm />
          Blog
        </Typography>
      </Breadcrumbs>
    </div>
  )
}

export default CustomeSeparator
