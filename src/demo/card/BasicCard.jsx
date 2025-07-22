import React from 'react'
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from 'archi-ui'
import { EllipsisVertical } from 'lucide-react'

const BasicCard = () => {
  return (
    <Card>
      <CardHeader
        title='Lorem ipsum dolor sit amet'
        subheader='June 11, 2025'
        avatar={<Avatar className='bg-warning'>R</Avatar>}
        action={
          <IconButton>
            <EllipsisVertical size={16} />
          </IconButton>
        }
      />
      <CardContent>
        <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatem officia quidem fuga quis ipsa, atque cum tenetur adipisci quisquam, nisi dignissimos minus, voluptates explicabo ex. Earum consequatur atque amet.</Typography>
      </CardContent>
      <CardActions>
        <Button>Learn more</Button>
        <Button>Share</Button>
      </CardActions>
    </Card>
  )
}

export default BasicCard
