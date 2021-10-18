import React, { useState } from "react";
import {
    Grid,
    Typography,
    Toolbar,
    Button,
    TextField,
    Box,
    AppBar
  } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux";
import classes from '../../styles/app.module.scss'
import { searchName } from "../../actions/index"
import { debounce } from "lodash";

function Search() {

    // const [searchname, setSearchname] = useState("");
    const dispatch = useDispatch();

    const handelSearch = debounce((val) => {
      dispatch(searchName(val));
    }, 1000);

    return (
        <Box
           className={classes.body}
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <form>
                <TextField id="outlined-basic" 
                className={classes.search_field} 
                label="Search"  
                onChange={(event) => handelSearch(event.target.value)} 
                variant="outlined" /> 
            </form>
            {/* <Button className={classes.search_button}
            onClick={handelSearch} variant="outlined">Search</Button> */}
        </Box>
    );
};

export default Search;