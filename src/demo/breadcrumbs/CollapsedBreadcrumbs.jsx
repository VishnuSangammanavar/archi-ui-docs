import React from 'react'
import { Breadcrumbs, Link, Typography } from 'archi-ui'

const CollapsedBreadcrumbs = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Breadcrumbs itemsAfterCollapse={2} itemsBeforeCollapse={2} maxItems={4}>
        <Link href='/' underline='hover'>Home</Link>
        <Link href='/about' underline='hover'>About</Link>
        <Link href='/services' underline='hover'>Services</Link>
        <Link href='/blog' underline='hover'>Blog</Link>
        <Link href='/catalog' underline='hover'>Catalog</Link>
        <Link href='/new-collection' underline='hover'>New Collection</Link>
        <Typography>Belts</Typography>
      </Breadcrumbs>
    </div>
  )
}

export default CollapsedBreadcrumbs
