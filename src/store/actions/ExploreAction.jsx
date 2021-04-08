import {
    FETCH_EXPLORE_POSTS_START,
    FETCH_EXPLORE_POSTS_SUCCESS,
    FETCH_EXPLORE_POSTS_FAILURE,
} from "./ActionConstant";
  
export function fetchExplorePostsStart(data) {
    return {
      type: FETCH_EXPLORE_POSTS_START,
      data,
    };
}
  
export function fetchExplorePostsSuccess(data) {
    return {
      type: FETCH_EXPLORE_POSTS_SUCCESS,
      data,
    };
}
  
export function fetchExplorePostsFailure(error) {
    return {
      type: FETCH_EXPLORE_POSTS_FAILURE,
      error,
    };
}
  