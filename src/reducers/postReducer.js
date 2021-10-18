import {
    GET_POSTS,
    GET_POST,
    // CREATE_POST,
    // UPDATE_POST,
    // DELETE_POST,
  } from "../actions/types";
  
  const initialState = {
    posts: [],
    post: null,
  };
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_POSTS:
        //   console.log(payload) 
        return {
          ...state,
          posts: payload,
        }
      default:
        return state;
    }
  };