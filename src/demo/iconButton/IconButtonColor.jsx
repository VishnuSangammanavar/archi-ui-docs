import React from 'react'
import { IconButton } from 'archi-ui'
import { Facebook, Github, Heart, Instagram, Linkedin, Plus, Twitter } from 'lucide-react'

const IconButtonColor = () => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-2'>
      <IconButton color='default'>
        <Plus />
      </IconButton>
      <IconButton color='primary'>
        <Facebook />
      </IconButton>
      <IconButton color='secondary'>
        <Instagram />
      </IconButton>
      <IconButton color='info'>
        <Linkedin />
      </IconButton>
      <IconButton color='warning'>
        <Github />
      </IconButton>
      <IconButton color='success'>
        <Twitter />
      </IconButton>
      <IconButton color='error'>
        <Heart />
      </IconButton>
    </div>
  )
}

export default IconButtonColor
