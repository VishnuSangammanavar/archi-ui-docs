import React from 'react'
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, IconButton } from 'archi-ui'
import { EllipsisVertical } from 'lucide-react'

const ImageCard = () => {
  return (
    <div className='flex items-center justify-center gap-2'>
      <Card style={{ width: '350px' }}>
        <CardHeader
          avatar={
            <Avatar size='md'>R</Avatar>
          }
          title='Lorem ipsum dolor sit amet'
          subheader='June 11, 2025'
          action={
            <IconButton>
              <EllipsisVertical size={16} />
            </IconButton>
          }
        />
        <CardContent className='flex flex-col items-center'>
          <img src='/img/docusaurus.png' alt='Image' />
          <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione fugiat voluptas rem quasi similique tempora? Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </CardContent>
        <CardActions className='justify-between'>
          <Button color='success'>Share</Button>
          <Button variant='link'>Read more</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default ImageCard