import React from 'react'
import { Checkbox } from 'archi-ui'
import { CheckCheck } from 'lucide-react'

const IconCheckbox = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Checkbox defaultChecked />
      <Checkbox defaultChecked checkedIcon={<CheckCheck />} />
    </div>
  )
}

export default IconCheckbox
