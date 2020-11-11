import { call, select, put, takeLatest, all } from "redux-saga/effects";
import api from "../../Environment";
import { createNotification } from "react-redux-notify";
import {
  getSuccessNotificationMessage,
  getErrorNotificationMessage,
} from "../../components/helper/NotificationMessage";
import {
  fetchSingleUserPostsFailure,
  fetchSingleUserPostsSuccess,
  fetchSingleUserProfileFailure,
  fetchSingleUserProfileSuccess,
} from "../actions/OtherUserAction";
import {
  FETCH_SINGLE_USER_POSTS_START,
  FETCH_SINGLE_USER_PROFILE_START,
} from "../actions/ActionConstant";

function* fetchOtherUserProfileAPI() {
  try {
    const inputData = yield select(
      (state) => state.otherUser.userDetails.inputData
    );
    const response = yield api.postMethod("other_profile", inputData);
    if (response.data.success) {
      yield put(fetchSingleUserProfileSuccess(response.data.data));
    } else {
      yield put(fetchSingleUserProfileFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(fetchSingleUserProfileFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* fetchOtherUserPostAPI() {
  try {
    const inputData = yield select(
      (state) => state.otherUser.userPosts.inputData
    );
    const response = yield api.postMethod("other_profile_posts", inputData);
    if (response.data.success) {
      yield put(fetchSingleUserPostsSuccess(response.data.data));
    } else {
      yield put(fetchSingleUserPostsFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(fetchSingleUserPostsFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

export default function* pageSaga() {
  yield all([
    yield takeLatest(FETCH_SINGLE_USER_PROFILE_START, fetchOtherUserProfileAPI),
  ]);
  yield all([
    yield takeLatest(FETCH_SINGLE_USER_POSTS_START, fetchOtherUserPostAPI),
  ]);
}
