import React from 'react'
import { Checkbox } from 'archi-ui'

const DefaultCheckedCheckbox = () => {
  return (
    <div className='flex items-center justify-center gap-2'>
      <Checkbox />
      <Checkbox defaultChecked />
      <Checkbox disabled />
      <Checkbox disabled defaultChecked />
    </div>
  )
}

export default DefaultCheckedCheckbox
