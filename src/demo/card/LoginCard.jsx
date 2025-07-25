import React from 'react'
import { Avatar, Button, Card, CardActions, CardContent, FormControl, FormHelperText, Input, Label, Link } from 'archi-ui'

const LoginCard = () => {
  return (
    <div className='flex items-center justify-center'>
      <Card style={{ width: '350px' }}>
        <div className='flex items-center justify-center p-4'>
          <Avatar className='w-12 h-12 bg-secondary' />
        </div>
        <CardContent>
          <FormControl error required>
            <Label>Email:</Label>
            <Input type='email' placeholder='Email' defaultValue='jhondoe@gmail.co' fullwidth />
            <FormHelperText>Invalid email Id</FormHelperText>
          </FormControl>
          <FormControl>
            <Label>Password:</Label>
            <Input type='password' placeholder='Password' fullwidth />
          </FormControl>
          <Link href='#' className='hover:text-primary'>Forget password?</Link>
        </CardContent>
        <CardActions className='flex flex-col justify-center gap-2'>
          <Button variant='filled' color='primary' fullwidth>Login</Button>
          <Link href='#' className='lowercase hover:text-primary no-underline'>Don't have account? Sign-up</Link>
        </CardActions>
      </Card>
    </div>
  )
}

export default LoginCard