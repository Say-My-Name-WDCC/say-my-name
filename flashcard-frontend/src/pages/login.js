import React from 'react';
// import logo from '.../public/logo.png';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Button, Typography } from '@material-ui/core';

function Login () {

  return (
  <div>
    <div style={{ width: '100%', height: '100vh', padding: '14vh 0' }}>
      <Box display="flex" justifyContent="center" p={0} bgcolor="background.paper">
        <img src={"./logo.png"} className="SMN-logo" alt="logo" />
      </Box>
      <Box display="flex" justifyContent="center" p={5} bgcolor="background.paper">
        <Button variant="outlined" color="primary">
         Login
        </Button>
      </Box>
    </div>
  </div>
  )
}

export default Login
