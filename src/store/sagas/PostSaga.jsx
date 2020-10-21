import { call, select, put, takeLatest, all } from "redux-saga/effects";
import api from "../../Environment";
import {
  FETCH_SINGLE_PAGE_START,
  SAVE_POST_START,
} from "../actions/ActionConstant";
import { createNotification } from "react-redux-notify";
import {
  getSuccessNotificationMessage,
  getErrorNotificationMessage,
} from "../../components/helper/NotificationMessage";
import { savePostFailure, savePostSuccess } from "../actions/PostAction";

function* savePostAPI() {
  try {
    const inputData = yield select((state) => state.post.savePost.inputData);
    const response = yield api.postMethod("posts_save", inputData);
    if (response.data.success) {
      yield put(savePostSuccess(response.data.data));
    } else {
      yield put(savePostFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(savePostFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

export default function* pageSaga() {
  yield all([yield takeLatest(SAVE_POST_START, savePostAPI)]);
}
