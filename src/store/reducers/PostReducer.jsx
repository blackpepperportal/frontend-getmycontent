import {
  SAVE_POST_START,
  SAVE_POST_SUCCESS,
  SAVE_POST_FAILURE,
} from "../actions/ActionConstant";

const initialState = {
  savePost: {
    data: {},
    loading: true,
    error: false,
    inputData: {},
    loadingButtonContent: null,
    buttonDisable: false,
  },
};

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_POST_START:
      return {
        ...state,
        savePost: {
          inputData: action.data,
          data: {},
          loading: true,
          error: false,
          loadingButtonContent: "Loading... Please wait",
          buttonDisable: true,
        },
      };
    case SAVE_POST_SUCCESS:
      return {
        ...state,
        savePost: {
          data: action.data,
          loading: false,
          error: false,
          inputData: {},
          loadingButtonContent: null,
          buttonDisable: false,
        },
      };
    case SAVE_POST_FAILURE:
      return {
        ...state,
        savePost: {
          data: {},
          loading: true,
          error: action.error,
          inputData: {},
          loadingButtonContent: null,
          buttonDisable: false,
        },
      };

    default:
      return state;
  }
};

export default PostReducer;
