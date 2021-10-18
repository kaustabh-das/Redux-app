import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Toolbar,
  Button,
  TextField,
  Box,
  CardContent,
  CardActions,
  Tabs,
  Tab,
  AppBar
} from '@material-ui/core';

// import PostCard from "./PostCard";
import { useSelector, useDispatch } from "react-redux";
import classes from './styles/app.module.scss'
import Navbar from './components/Navbar/navbar';
import Card from './components/Cards/card';
import Pagination from "./components/Pagination/pagination";
import Search from './components/Search/search'
import { getPosts } from "./actions/index";

function App() {

  // const [page, setPage] = useState(1);
  // const page_val = useSelector((state) => state.changeThePage)
  
  // useEffect(() => {
  //   setPage(page_val)
  // }, [page])
  
  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   dispatch(getPosts(searchname))
  // }


  return (
    <Box className={classes.root}>
      {/* {console.log(posts && posts.results)}
      {console.log(searchname)} */}
      <Navbar />
      <Search />
      <Card />        
      <Pagination />
    </Box>
  );
}

export default App;
