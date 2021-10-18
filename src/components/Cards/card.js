import React, { useState, useEffect } from "react";
import {
    Grid,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Paper,
    TextField,
    Box,
    AppBar
  } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux";
import { styled } from '@mui/material/styles';
import classes from '../../styles/app.module.scss'
import { getPosts } from "../../actions/index"

function Cards() {

    // const [searchname, setSearchname] = useState("");
    const dispatch = useDispatch();

    const posts = useSelector((state) => state.postReducer.posts);
    const searchname = useSelector((state) => state.changeTheSearchValue)
    const page = useSelector((state) => state.changeThePage)

    const img = "https://firebasestorage.googleapis.com/v0/b/dmsne-9e4af.appspot.com/o/categories%2Fmachinary%2Fimg2.png?alt=media&token=23f32b95-da4f-486f-9198-cbf2d7fee628"

    // const Item = styled(Paper)(({ theme }) => ({
    //     ...theme.typography.body2,
    //     padding: theme.spacing(2),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    //   }));
    
      useEffect(() => {
        // setPage(useSelector((state) => state.changeThePage))
        dispatch(getPosts(page))
        // console.log(search)
      }, [page]);

    return (
        <Box className={classes.main_area} sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
          {posts && posts.results && posts.results.filter((postItem)=> {
            if (searchname == "") {
              return postItem
            } else if (postItem.name.toLowerCase().includes(searchname.toLocaleLowerCase())){
              return postItem 
            }
          }).map((postItem) => (
            <Grid  item lg={3} md={4} sm={6} xs={12}>
              <Card className={classes.info_area} sx={{ minWidth: 275 }}>
                <CardMedia
                        component="img"
                        height="194"
                        image= {img}
                        alt="Paella dish"
                    />
                    <CardContent>
                  {/* <Item >
                    Name:{postItem.name}
                  </Item> */}
                  <Typography variant="h6" color="inherit" component="div">
                    Name: {postItem.name}
                  </Typography>
                  <Typography variant="h6" color="inherit" component="div">
                    {/* Height: {postItem.height} */}
                    Page: {page}
                  </Typography>
                  <Typography variant="h6" color="inherit" component="div">
                    Mass: {postItem.mass}
                  </Typography>
                  <Typography variant="h6" color="inherit" component="div">
                    Hair Color: {postItem.hair_color}
                  </Typography>
                  <Typography variant="h6" color="inherit" component="div">
                    Skin Color: {postItem.skin_color}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
             ))}
          </Grid>
        </Box>
    );
};

export default Cards;