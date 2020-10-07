import {
  DISPLAY_FORGOT_PASSWORD,
  DISPLAY_SIGNUP,
  DISPLAY_LOGIN,
} from "./ActionConstant";

export function displayForgotPassword() {
  return {
    type: DISPLAY_FORGOT_PASSWORD,
  };
}

export function displayLogin() {
  return {
    type: DISPLAY_LOGIN,
  };
}
export function displaySignup() {
  return {
    type: DISPLAY_SIGNUP,
  };
}
