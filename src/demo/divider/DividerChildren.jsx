import React from 'react'
import { Chip, Divider } from 'archi-ui'

const DividerChildren = () => {
  return (
    <div className='w-full text-center bg-accent border border-solid rounded-md p-4'>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium doloribus labore sequi, alias impedit vel.</p>
      <Divider>Center</Divider>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium doloribus labore sequi, alias impedit vel.</p>
      <Divider textAlign='start'>Left</Divider>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium doloribus labore sequi, alias impedit vel.</p>
      <Divider textAlign='end'>Right</Divider>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium doloribus labore sequi, alias impedit vel.</p>
      <Divider><Chip>Chip</Chip></Divider>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium doloribus labore sequi, alias impedit vel.</p>
    </div>
  )
}

export default DividerChildren
