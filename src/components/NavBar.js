import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import  Typography from '@material-ui/core/Typography'
import {Home, Book, AccountBox} from '@material-ui/icons'

const NavBar = (props) => {
  return (
    <div>
      <List component="nav">
        <ListItem component="div">
          <ListItemText inset>
            <Typography color="inherit" variant="title">
              <Home /> Home 
            </Typography>
          </ListItemText>

          <ListItemText inset>
            <Typography color="inherit" variant="title">
              <Book /> Posts
            </Typography>
          </ListItemText>

          <ListItemText inset>
            <Typography color="inherit" variant="title">
              <AccountBox /> Contact 
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
    </div>
  )
}

export default NavBar