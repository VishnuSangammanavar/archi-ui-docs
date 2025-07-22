import React from 'react'
import { List, ListItem, ListItemText, ListSubheader } from 'archi-ui'

const StickyHeader = () => {
  return (
    <div className='flex items-center justify-center'>
      <List
        style={{width: '360px', maxWidth: '360px', position: 'relative', overflow: 'auto', height: '300px'}}
        subheader={<li />}
        className='bg-popover'
      >
        {[0, 1, 2, 3, 4, 5].map((sectionId) => (
          <li key={`section-${sectionId}`}>
            <ul>
              <ListSubheader className='bg-popover'>{`I'm sticky ${sectionId}`}</ListSubheader>
              {[0, 1, 2, 3, 4].map((item) => (
                <ListItem key={`item-${sectionId}-${item}`}>
                  <ListItemText primary={`Item ${item}`} />
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
      </List>
    </div>
  )
}

export default StickyHeader