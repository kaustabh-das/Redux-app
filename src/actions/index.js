import { GET_POSTS, GET_POST, CREATE_POST, UPDATE_POST, DELETE_POST } from "./types";
import axios from "axios";

// get a posts
export const getPosts = (page) => async (dispatch)=> {

//   const result = await axios.get(`https://www.superheroapi.com/api.php/1113688955703635/search/${searchname}`);
  const result = await axios.get(`https://swapi.dev/api/people/?page=${page}`);

 console.log(result.data);
  if(result.status === 200) {
    dispatch({
      type: GET_POSTS,
    //   data: result.data,
      payload: result.data,
    });
  } 
  
};

// get a post
// export const getPost = (id) => ({
//   type: GET_POST,
//   payload: id,
// });

// export const searchName = (searchname) => {
// 	return {
// 		type: "CHANGE_VALUE",
//     payload: searchname
// 	}  
// }

export const searchName = (searchname) => async (dispatch)=> {

  const result = await axios.get(`https://swapi.dev/api/people/?search=${searchname}`);
  
   console.log(result.data);
    if(result.status === 200) {
      dispatch({
        type: GET_POSTS,
      //   data: result.data,
        payload: result.data,
      });
    } 
    
  };

export const frontendPagination = (page) => {
	return {
		type: "CHANGE_PAGE",
    payload: page
	}  
}
