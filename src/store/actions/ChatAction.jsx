import {
  FETCH_CHAT_USERS_START,
  FETCH_CHAT_USERS_SUCCESS,
  FETCH_CHAT_USERS_FAILURE,
  FETCH_CHAT_MESSAGE_START,
  FETCH_CHAT_MESSAGE_SUCCESS,
  FETCH_CHAT_MESSAGE_FAILURE,
} from "./ActionConstant";

export function fetchChatUsersStart(data) {
  return {
    type: FETCH_CHAT_USERS_START,
    data,
  };
}

export function fetchChatUsersSuccess(data) {
  return {
    type: FETCH_CHAT_USERS_SUCCESS,
    data,
  };
}

export function fetchChatUsersFailure(error) {
  return {
    type: FETCH_CHAT_USERS_FAILURE,
    error,
  };
}

export function fetchChatMessageStart(data) {
  return {
    type: FETCH_CHAT_MESSAGE_START,
    data,
  };
}

export function fetchChatMessageSuccess(data) {
  return {
    type: FETCH_CHAT_MESSAGE_SUCCESS,
    data,
  };
}

export function fetchChatMessageFailure(error) {
  return {
    type: FETCH_CHAT_MESSAGE_FAILURE,
    error,
  };
}
