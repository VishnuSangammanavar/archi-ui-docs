import { BottomNavigation, BottomNavigationAction } from 'elementx';
import React, { useState } from 'react'

const Controlled = () => {

  const [navigationValue, setNavigationValue] = useState(0);

  return (
    <BottomNavigation
      className='bottom-0 left-0 right-0 z-50'
      value={navigationValue}
      onValueChange={(newValue) => setNavigationValue(newValue)}
      showLabel
      actionClassName='text-red-800'
    >
      <BottomNavigationAction
        icon='Home Icon' 
        label="Home"
        value={0}
      />
      <BottomNavigationAction
        icon='Service Icon'
        label="Search"
        value={1}
      />
      <BottomNavigationAction
        icon='Services Icon'
        label="Settings"
        value={2}
      />
    </BottomNavigation>
  )
}

export default Controlled