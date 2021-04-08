import { call, select, put, takeLatest, all } from "redux-saga/effects";
import api from "../../Environment";
import { createNotification } from "react-redux-notify";
import {
  getSuccessNotificationMessage,
  getErrorNotificationMessage,
} from "../../components/helper/NotificationMessage";

import {
    fetchExplorePostsSuccess,
    fetchExplorePostsFailure,
} from "../actions/ExploreAction";
import {
    FETCH_EXPLORE_POSTS_START,
} from "../actions/ActionConstant";

function* fetchBookmarkAPI() {
  try {
    const inputData = yield select(
      (state) => state.explorePosts.explorePosts.inputData
    );
    const response = yield api.postMethod("explore", inputData);
    if (response.data.success) {
      yield put(fetchExplorePostsSuccess(response.data.data));
    } else {
      yield put(fetchExplorePostsFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(fetchExplorePostsFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}
export default function* pageSaga() {
  yield all([yield takeLatest(FETCH_EXPLORE_POSTS_START, fetchBookmarkAPI)]);
}
