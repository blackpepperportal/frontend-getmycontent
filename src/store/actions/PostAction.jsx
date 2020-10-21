import {
  SAVE_POST_START,
  SAVE_POST_SUCCESS,
  SAVE_POST_FAILURE,
} from "./ActionConstant";

export function savePostStart(data) {
  return {
    type: SAVE_POST_START,
    data,
  };
}

export function savePostSuccess(data) {
  return {
    type: SAVE_POST_SUCCESS,
    data,
  };
}

export function savePostFailure(error) {
  return {
    type: SAVE_POST_FAILURE,
    error,
  };
}
