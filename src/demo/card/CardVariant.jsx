import React from 'react'
import { Button, Card, CardActions, CardContent } from 'archi-ui'

const CardVariant = () => {
  return (
    <div className='flex items-center justify-center gap-2'>
      <Card variant='outlined'>
        <CardContent>
          <h2 className='text-2xl'>Outlined</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatem officia quidem fuga quis ipsa, atque cum tenetur adipisci quisquam, nisi dignissimos minus, voluptates explicabo ex. Earum consequatur atque amet.</p>
        </CardContent>
        <CardActions>
          <Button>Learn more</Button>
        </CardActions>
      </Card>
      <Card variant='elevation'>
        <CardContent>
          <h2 className='text-2xl'>Elevation</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatem officia quidem fuga quis ipsa, atque cum tenetur adipisci quisquam, nisi dignissimos minus, voluptates explicabo ex. Earum consequatur atque amet.</p>
        </CardContent>
        <CardActions>
          <Button>Learn more</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default CardVariant