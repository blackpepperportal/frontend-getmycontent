import { call, select, put, takeLatest, all } from "redux-saga/effects";
import api from "../../Environment";
import { createNotification } from "react-redux-notify";
import {
  getSuccessNotificationMessage,
  getErrorNotificationMessage,
} from "../../components/helper/NotificationMessage";

import {
  deleteBookmarkFailure,
  deleteBookmarkSuccess,
  fetchBookmarksFailure,
  fetchBookmarksSuccess,
  saveBookmarkFailure,
  saveBookmarkSuccess,
} from "../actions/BookmarkAction";
import {
  DELETE_BOOKMARK_START,
  FETCH_BOOKMARKS_START,
  SAVE_BOOKMARK_START,
} from "../actions/ActionConstant";

function* fetchBookmarkAPI() {
  try {
    const response = yield api.postMethod("post_bookmarks");
    if (response.data.success) {
      yield put(fetchBookmarksSuccess(response.data.data));
    } else {
      yield put(fetchBookmarksFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(fetchBookmarksFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* saveBookmarkAPI() {
  try {
    const inputData = yield select(
      (state) => state.bookmark.saveBookmark.inputData
    );
    const response = yield api.postMethod("post_bookmarks_save", inputData);
    if (response.data.success) {
      yield put(saveBookmarkSuccess(response.data.data));
      const notificationMessage = getSuccessNotificationMessage(
        response.data.message
      );
      yield put(createNotification(notificationMessage));
    } else {
      yield put(saveBookmarkFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(saveBookmarkFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* deleteBookmarkAPI() {
  try {
    const inputData = yield select((state) => state.docs.delDocs.inputData);
    const response = yield api.postMethod("post_bookmarks_delete", inputData);
    if (response.data.success) {
      yield put(deleteBookmarkSuccess(response.data.data));
      const notificationMessage = getSuccessNotificationMessage(
        response.data.message
      );
      yield put(createNotification(notificationMessage));
    } else {
      yield put(deleteBookmarkFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(deleteBookmarkFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

export default function* pageSaga() {
  yield all([yield takeLatest(FETCH_BOOKMARKS_START, fetchBookmarkAPI)]);
  yield all([yield takeLatest(SAVE_BOOKMARK_START, saveBookmarkAPI)]);
  yield all([yield takeLatest(DELETE_BOOKMARK_START, deleteBookmarkAPI)]);
}
