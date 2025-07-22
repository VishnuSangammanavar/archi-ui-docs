"use client"

import React, { useState } from 'react'
import { Badge, Button, ButtonGroup, Switch } from 'archi-ui'
import { Plus, Minus, Mail } from 'lucide-react'

const Visibility = () => {

  const [count, setCount] = useState(10)
  const [visibleBadge, setVisibleBadge] = useState(false);

  const handleBadgeVisible = () => {
    setVisibleBadge(!visibleBadge);
  }

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className='flex gap-4'>
        <div className="relative inline-flex items-center">
          <Mail className='text-secondary' />
          <Badge badgeContent={count} color='secondary' className='absolute top-0 transform -translate-y-1/2 right-0 translate-x-1/2' />
        </div>
        <ButtonGroup>
          <Button onClick={() => setCount(Math.max(count - 1, 0))}><Minus /></Button>
          <Button onClick={() => setCount(count + 1)}><Plus /></Button>
        </ButtonGroup>
      </div>
      <div className='flex gap-4'>
        <div className="relative inline-flex items-center">
          <Mail className='text-secondary' />
          <Badge variant='dot' color='secondary' invisible={visibleBadge} className='absolute top-0 transform -translate-y-1/2 right-0 translate-x-1/2' />
        </div>
        <div className='flex items-center justify-center gap-2'>
          <Switch checked={!visibleBadge} onChange={handleBadgeVisible} variant='standard' />
          <p>Show Badge</p>
        </div>
      </div>
    </div>
  )
}

export default Visibility
