"use client"

import React, { useState } from 'react'
import { Breadcrumbs, IconButton, Menu, MenuItem, Link } from 'archi-ui';
import { Ellipsis } from 'lucide-react';

const MenuBreadcrumbs = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    if(event) {
      setAnchorEl(event.currentTarget);
    }
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <div className="flex items-center justify-center gap-2">
      <Menu open={open} onClose={handleClose} anchorEl={anchorEl}>
        <MenuItem divider onClick={handleClose}>Breadcrumbs 2</MenuItem>
        <MenuItem divider onClick={handleClose}>Breadcrumbs 3</MenuItem>
        <MenuItem divider onClick={handleClose}>Breadcrumbs 4</MenuItem>
      </Menu>
      <Breadcrumbs>
        <Link href='#'>Breadcrumb 1</Link>
        <IconButton onClick={handleClick}>
          <Ellipsis size={16} />
        </IconButton>
        <Link href='#'>Breadcrumb 5</Link>
        <Link href='#'>Breadcrumb 6</Link>
      </Breadcrumbs>
    </div>
  )
}

export default MenuBreadcrumbs
