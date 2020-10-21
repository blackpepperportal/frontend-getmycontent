import {
  FOLLOW_USER_START,
  FOLLOW_USER_SUCCESS,
  FOLLOW_USER_FAILURE,
} from "./ActionConstant";

export function followUserStart(data) {
  return {
    type: FOLLOW_USER_START,
    data,
  };
}

export function followUserSuccess(data) {
  return {
    type: FOLLOW_USER_SUCCESS,
    data,
  };
}

export function followUserFailure(error) {
  return {
    type: FOLLOW_USER_FAILURE,
    error,
  };
}
