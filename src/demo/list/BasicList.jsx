import React from 'react'
import { List, ListItem } from 'archi-ui'

const BasicList = () => {
  return (
    <List>
      <ListItem divider>Item 1</ListItem>
      <ListItem divider selected>selected</ListItem>
      <ListItem divider disabled>disabled</ListItem>
      <ListItem divider disableGutters>disable Gutters</ListItem>
      <ListItem divider disablePadding>disable Padding</ListItem>
    </List>
  )
}

export default BasicList