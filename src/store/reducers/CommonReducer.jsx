import {
  DISPLAY_FORGOT_PASSWORD,
  DISPLAY_LOGIN,
  DISPLAY_SIGNUP,
} from "../actions/ActionConstant";

const initialState = {
  displayForgotPassword: false,
  displayLogin: false,
  displaySignup: false,
};

const CommonReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_FORGOT_PASSWORD:
      return {
        ...state,
        displayForgotPassword: true,
        displayLogin: false,
        displaySignup: false,
      };
    case DISPLAY_LOGIN:
      return {
        ...state,
        displayForgotPassword: false,
        displayLogin: true,
        displaySignup: false,
      };
    case DISPLAY_SIGNUP:
      return {
        ...state,
        displayForgotPassword: false,
        displayLogin: false,
        displaySignup: true,
      };
    default:
      return state;
  }
};

export default CommonReducer;
