import { call, select, put, takeLatest, all } from "redux-saga/effects";
import api from "../../Environment";
import {
  FETCH_FOLLOWERS_START,
  FETCH_FOLLOWING_START,
  FOLLOW_USER_START,
  UNFOLLOW_USER_START,
} from "../actions/ActionConstant";
import { createNotification } from "react-redux-notify";
import {
  getSuccessNotificationMessage,
  getErrorNotificationMessage,
} from "../../components/helper/NotificationMessage";
import {
  fetchFollowersFailure,
  fetchFollowersSuccess,
  fetchFollowingFailure,
  fetchFollowingSuccess,
  followUserFailure,
  followUserSuccess,
  unFollowUserFailure,
  unFollowUserSuccess,
} from "../actions/FollowAction";

function* followUserAPI() {
  try {
    const inputData = yield select(
      (state) => state.follow.followUser.inputData
    );
    const response = yield api.postMethod("follow_users", inputData);
    if (response.data.success) {
      yield put(followUserSuccess(response.data.data));
      const notificationMessage = getSuccessNotificationMessage(
        response.data.message
      );
      yield put(createNotification(notificationMessage));
    } else {
      yield put(followUserFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(followUserFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* unFollowUserAPI() {
  try {
    const inputData = yield select(
      (state) => state.follow.unFollowUser.inputData
    );
    const response = yield api.postMethod("unfollow_users", inputData);
    if (response.data.success) {
      yield put(unFollowUserSuccess(response.data.data));
      const notificationMessage = getSuccessNotificationMessage(
        response.data.message
      );
      yield put(createNotification(notificationMessage));
    } else {
      yield put(unFollowUserFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(unFollowUserFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* fetchFollowersAPI() {
  try {
    const response = yield api.postMethod("followers");
    if (response.data.success) {
      yield put(fetchFollowersSuccess(response.data.data));
    } else {
      yield put(fetchFollowersFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(fetchFollowersFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* fetchFollowingAPI() {
  try {
    const response = yield api.postMethod("followings");
    if (response.data.success) {
      yield put(fetchFollowingSuccess(response.data.data));
    } else {
      yield put(fetchFollowingFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(fetchFollowingFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

export default function* pageSaga() {
  yield all([yield takeLatest(FOLLOW_USER_START, followUserAPI)]);
  yield all([yield takeLatest(UNFOLLOW_USER_START, followUserAPI)]);
  yield all([yield takeLatest(FETCH_FOLLOWERS_START, followUserAPI)]);
  yield all([yield takeLatest(FETCH_FOLLOWING_START, followUserAPI)]);
}
