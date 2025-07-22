import React from 'react'
import { Card, Divider, Typography } from 'archi-ui'
import { AlignCenter, AlignLeft, AlignRight, Bold, Italic } from 'lucide-react'

const DividerOrientation = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <Card variant='outlined' className='flex items-center justify-center gap-2 px-2 py-1'>
        <Typography>Cut</Typography>
        <Divider orientation='vertical' className='h-5' />
        <Typography>Copy</Typography>
        <Divider orientation='vertical' className='h-5' />
        <Typography>Paste</Typography>
        <Divider orientation='vertical' className='h-5' />
        <Typography>Select All</Typography>
      </Card>
      <Card variant='outlined' className='flex items-center justify-center gap-2 px-2 py-1'>
        <AlignLeft />
        <AlignCenter />
        <AlignRight />
        <Divider orientation='vertical' className='h-5' />
        <Bold />
      </Card>
      <Card variant='outlined' className='flex items-center justify-center gap-2 px-2 py-1'>
        <Bold />
        <Divider orientation='vertical' className='h-5' />
        <Italic />
      </Card>
    </div>
  )
}

export default DividerOrientation