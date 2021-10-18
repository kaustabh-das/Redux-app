import React, { useEffect, useState } from "react";
import {
    Grid,
    Typography,
    Toolbar,
    Button,
    TextField,
    Box,
    AppBar
  } from '@material-ui/core';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from "react-redux";
import classes from '../../styles/app.module.scss'
import { frontendPagination } from "../../actions/index"



function Pagination_sec() {
    
    const dispatch = useDispatch();

    const [page, setPage] = useState(1);

    const handlePagination = (event, value) => {
        // event.preventDefault();
        setPage(value);
        console.log(page);
        // dispatch(getPosts(page));
        
    };

    useEffect(() => {
        dispatch(frontendPagination(page))
    },[page])

    return (
        <Box className={classes.pagination_area}>
          <Stack spacing={2}>
            <Pagination  
                count={9} 
                page={page} 
                onChange={handlePagination} 
                variant="outlined" 
                shape="rounded" 
            />
          </Stack>
        </Box>
    );
};

export default Pagination_sec;