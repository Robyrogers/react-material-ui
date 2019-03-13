import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <div>
        <AppBar color='primary' position='static'>
          <Toolbar>
            <Typography variant='title'
              color='inherit'
            >
              My header
            </Typography>
            <NavBar />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default App;
