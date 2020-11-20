import { call, select, put, takeLatest, all } from "redux-saga/effects";
import api from "../../Environment";
import {
  CHANGE_POST_STATUS_START,
  DELETE_POST_START,
  FETCH_POSTS_START,
  FETCH_SINGLE_POST_START,
  POST_FILE_UPLOAD_START,
  SAVE_POST_START,
} from "../actions/ActionConstant";
import { createNotification } from "react-redux-notify";
import {
  getSuccessNotificationMessage,
  getErrorNotificationMessage,
} from "../../components/helper/NotificationMessage";
import {
  changePostStatusFailure,
  changePostStatusSuccess,
  deletePostFailure,
  deletePostSuccess,
  fetchPostsFailure,
  fetchPostsSuccess,
  fetchSinglePostFailure,
  fetchSinglePostSuccess,
  postFileUploadFailure,
  postFileUploadSuccess,
  savePostFailure,
  savePostSuccess,
} from "../actions/PostAction";

function* savePostAPI() {
  try {
    const inputData = yield select((state) => state.post.savePost.inputData);

    if (!inputData.content && !inputData.files) {
      yield put(savePostFailure("Please fill the content"));
      const notificationMessage = getErrorNotificationMessage(
        "Please fill the content"
      );
      yield put(createNotification(notificationMessage));
    } else {
      const response = yield api.postMethod("posts_save_for_owner", inputData);
      if (response.data.success) {
        yield put(savePostSuccess(response.data.data));
        const notificationMessage = getSuccessNotificationMessage(
          response.data.message
        );
        yield put(createNotification(notificationMessage));
        window.location.assign("/home");
      } else {
        yield put(savePostFailure(response.data.error));
        const notificationMessage = getErrorNotificationMessage(
          response.data.error
        );
        yield put(createNotification(notificationMessage));
      }
    }
  } catch (error) {
    yield put(savePostFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* fetchPostsAPI() {
  try {
    const response = yield api.postMethod("posts_for_owner");
    if (response.data.success) {
      yield put(fetchPostsSuccess(response.data.data));
    } else {
      yield put(fetchPostsFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(fetchPostsFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* fetchSinglePostAPI() {
  try {
    const inputData = yield select((state) => state.post.singlePost.inputData);
    const response = yield api.postMethod("posts_view", inputData);
    if (response.data.success) {
      yield put(fetchSinglePostSuccess(response.data.data));
      const notificationMessage = getSuccessNotificationMessage(
        response.data.message
      );
      yield put(createNotification(notificationMessage));
    } else {
      yield put(fetchSinglePostFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(fetchSinglePostFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* deletePostAPI() {
  try {
    const inputData = yield select((state) => state.post.delPost.inputData);
    const response = yield api.postMethod("posts_delete", inputData);
    if (response.data.success) {
      yield put(deletePostSuccess(response.data.data));
      const notificationMessage = getSuccessNotificationMessage(
        response.data.message
      );
      yield put(createNotification(notificationMessage));
    } else {
      yield put(deletePostFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(deletePostFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* changePostStatusAPI() {
  try {
    const inputData = yield select(
      (state) => state.post.changePostStatus.inputData
    );
    const response = yield api.postMethod("posts_status", inputData);
    if (response.data.success) {
      yield put(changePostStatusSuccess(response.data.data));
      const notificationMessage = getSuccessNotificationMessage(
        response.data.message
      );
      yield put(createNotification(notificationMessage));
    } else {
      yield put(changePostStatusFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(changePostStatusFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* postFileUploadAPI() {
  try {
    const inputData = yield select((state) => state.post.fileUpload.inputData);
    const response = yield api.postMethod("post_files_upload", inputData);
    if (response.data.success) {
      yield put(postFileUploadSuccess(response.data.data));
      // const notificationMessage = getSuccessNotificationMessage(
      //   response.data.message
      // );
      // yield put(createNotification(notificationMessage));
    } else {
      yield put(postFileUploadFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(postFileUploadFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

export default function* pageSaga() {
  yield all([yield takeLatest(SAVE_POST_START, savePostAPI)]);
  yield all([yield takeLatest(FETCH_POSTS_START, fetchPostsAPI)]);
  yield all([yield takeLatest(FETCH_SINGLE_POST_START, fetchSinglePostAPI)]);
  yield all([yield takeLatest(DELETE_POST_START, deletePostAPI)]);
  yield all([yield takeLatest(CHANGE_POST_STATUS_START, changePostStatusAPI)]);
  yield all([yield takeLatest(POST_FILE_UPLOAD_START, postFileUploadAPI)]);
}
