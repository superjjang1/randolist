import React, {Component} from 'react';
import {Button, Box} from '@material-ui/core';


const Login = () =>(
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    style={{ height: "100%" }}
  >
    <Box p={1}>
      <h3 className="logintext"> Discover new music with the help of old favorites. </h3>
    </Box>
    <Box p={1}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          window.location = `http://localhost:8010/login`;
        }}
      >
        Connect with Spotify
      </Button>
    </Box>
  </Box>
);

export default Login;
 

 
