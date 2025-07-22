import React from 'react'
import { Card, CardContent, IconButton, Typography } from 'archi-ui'
import { Play, SkipBack, SkipForward } from 'lucide-react'

const UiControlCard = () => {
  return (
    <div className='flex items-center justify-center'>
      <Card className='flex' style={{ width: '360px' }}>
        <div className='flex flex-col'>
          <CardContent className='flex flex-col'>
            <Typography variant="h3">
              Live From Space
            </Typography>
            <Typography
              variant="subtitle1"
              className='text-secondary'
            >
              Mac Miller
            </Typography>
          </CardContent>
          <div className='flex items-center pl-2 pb-2'>
            <IconButton>
              <SkipBack size={16} />
            </IconButton>
            <IconButton size='lg'>
              <Play />
            </IconButton>
            <IconButton>
              <SkipForward size={16} />
            </IconButton>
          </div>
        </div>
        <img
          src="/static/images/cards/live-from-space.jpg"
          alt="Live from space album cover"
          style={{ width: '120px', height: '100%' }}
        />
      </Card>
    </div>
  )
}

export default UiControlCard
