import {
    FETCH_EXPLORE_POSTS_START,
    FETCH_EXPLORE_POSTS_SUCCESS,
    FETCH_EXPLORE_POSTS_FAILURE,
  } from "../actions/ActionConstant";
  
  const initialState = {
    explorePosts: {
      data: {
        posts: [],
      },
      loading: true,
      error: false,
      inputData: {},
      skip: 0,
      length: 0,
    },
  };
  
  const ExploreReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_EXPLORE_POSTS_START:
        return {
          ...state,
          explorePosts: {
            inputData: action.data,
            data: {
              posts: [...state.explorePosts.data.posts],
            },
            loading: true,
            error: false,
            skip: state.explorePosts.skip,
            length: state.explorePosts.length,
          },
        };
      case FETCH_EXPLORE_POSTS_SUCCESS:
        return {
          ...state,
          explorePosts: {
            data: {
              posts: [...state.explorePosts.data.posts, ...action.data.posts],
            },
            loading: false,
            error: false,
            inputData: {},
            skip: action.data.posts.length + state.explorePosts.skip,
            length: action.data.posts.length,
          },
        };
      case FETCH_EXPLORE_POSTS_FAILURE:
        return {
          ...state,
          explorePosts: {
            data: {},
            loading: true,
            error: action.error,
            inputData: {},
            skip: state.explorePosts.skip,
            length: state.explorePosts.length,
          },
        };
  
      default:
        return state;
    }
  };
  
  export default ExploreReducer;
  