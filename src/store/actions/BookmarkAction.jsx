import {
  FETCH_BOOKMARKS_START,
  FETCH_BOOKMARKS_SUCCESS,
  FETCH_BOOKMARKS_FAILURE,
  SAVE_BOOKMARK_START,
  SAVE_BOOKMARK_SUCCESS,
  SAVE_BOOKMARK_FAILURE,
  DELETE_BOOKMARK_START,
  DELETE_BOOKMARK_SUCCESS,
  DELETE_BOOKMARK_FAILURE,
} from "./ActionConstant";

export function fetchBookmarksStart(data) {
  return {
    type: FETCH_BOOKMARKS_START,
    data,
  };
}

export function fetchBookmarksSuccess(data) {
  return {
    type: FETCH_BOOKMARKS_SUCCESS,
    data,
  };
}

export function fetchBookmarksFailure(error) {
  return {
    type: FETCH_BOOKMARKS_FAILURE,
    error,
  };
}

export function saveBookmarkStart(data) {
  return {
    type: SAVE_BOOKMARK_START,
    data,
  };
}

export function saveBookmarkSuccess(data) {
  return {
    type: SAVE_BOOKMARK_SUCCESS,
    data,
  };
}

export function saveBookmarkFailure(error) {
  return {
    type: SAVE_BOOKMARK_FAILURE,
    error,
  };
}

export function deleteBookmarkStart(data) {
  return {
    type: DELETE_BOOKMARK_START,
    data,
  };
}

export function deleteBookmarkSuccess(data) {
  return {
    type: DELETE_BOOKMARK_SUCCESS,
    data,
  };
}

export function deleteBookmarkFailure(error) {
  return {
    type: DELETE_BOOKMARK_FAILURE,
    error,
  };
}
