import React from "react";
import {
    Grid,
    Typography,
    Toolbar,
    Button,
    TextField,
    Box,
    AppBar
  } from '@material-ui/core';
  import classes from '../../styles/app.module.scss'
  import { useSelector, useDispatch } from "react-redux";

function Navbar() {

    const page = useSelector((state) => state.changeThePage)

    return (
        <Box className={classes.navbar} sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar className={classes.navbar_info} >
                <Typography className={classes.navbar_logo} variant="h6" color="inherit" component="div">
                  Superheros
                </Typography>
                {/* <Box className={classes.navbar_display} > */}
                  <Typography className={classes.navbar_display_page} variant="h6" color="inherit" component="div">
                    page: {page}
                  </Typography>
                {/* </Box> */}
              </Toolbar>
            </AppBar>
          </Box>
    );
};

export default Navbar;