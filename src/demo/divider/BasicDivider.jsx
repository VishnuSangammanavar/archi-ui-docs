import React from 'react'
import { Card, CardContent, Chip, Divider, Typography } from 'archi-ui'

const BasicDivider = () => {
  return (
    <div className='flex items-center justify-center'>
      <Card style={{ maxWidth: 360 }}>
        <CardContent>
          <Typography gutterBottom variant='h5'>Toothbrush</Typography>
          <Typography gutterBottom variant='h6'>$4.50</Typography>
          <Typography gutterBottom variant='body2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati natus id, expedita culpa iure earum? Vel harum blanditiis accusantium illum!
          </Typography>
          <Divider />
          <div>
            <Typography gutterBottom variant='body2'>Select type</Typography>
            <div className='flex gap-2'>
              <Chip color='primary' size='sm'>Soft</Chip>
              <Chip size='sm'>Medium</Chip>
              <Chip size='sm'>Hard</Chip>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default BasicDivider
