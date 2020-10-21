import {
  FOLLOW_USER_START,
  FOLLOW_USER_SUCCESS,
  FOLLOW_USER_FAILURE,
} from "../actions/ActionConstant";

const initialState = {
  followUser: {
    data: {},
    loading: true,
    error: false,
    inputData: {},
    loadingButtonContent: null,
    buttonDisable: false,
  },
};

const FollowReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER_START:
      return {
        ...state,
        followUser: {
          data: {},
          loading: true,
          error: false,
          inputData: action.data,
          loadingButtonContent: "Loading... Please wait.",
          buttonDisable: true,
        },
      };
    case FOLLOW_USER_SUCCESS:
      return {
        ...state,
        followUser: {
          data: action.data,
          loading: false,
          error: false,
          inputData: {},
          loadingButtonContent: null,
          buttonDisable: false,
        },
      };
    case FOLLOW_USER_FAILURE:
      return {
        ...state,
        followUser: {
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

export default FollowReducer;
