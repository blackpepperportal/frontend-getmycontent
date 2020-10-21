import { call, select, put, takeLatest, all } from "redux-saga/effects";
import api from "../../Environment";
import { FOLLOW_USER_START } from "../actions/ActionConstant";
import { createNotification } from "react-redux-notify";
import {
  getSuccessNotificationMessage,
  getErrorNotificationMessage,
} from "../../components/helper/NotificationMessage";
import { followUserFailure, followUserSuccess } from "../actions/FollowAction";

function* followUserAPI() {
  try {
    const inputData = yield select((state) => state.post.savePost.inputData);
    const response = yield api.postMethod("follow_users", inputData);
    if (response.data.success) {
      yield put(followUserSuccess(response.data.data));
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

export default function* pageSaga() {
  yield all([yield takeLatest(FOLLOW_USER_START, followUserAPI)]);
}
