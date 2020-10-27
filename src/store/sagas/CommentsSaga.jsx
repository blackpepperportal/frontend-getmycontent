import { call, select, put, takeLatest, all } from "redux-saga/effects";
import api from "../../Environment";
import { createNotification } from "react-redux-notify";
import {
  getSuccessNotificationMessage,
  getErrorNotificationMessage,
} from "../../components/helper/NotificationMessage";
import {
  DEL_VERI_DOC_START,
  FETCH_VERI_DOCUMENT_START,
  SAVE_VERI_DOC_START,
} from "../actions/ActionConstant";
import {
  deleteCommentFailure,
  deleteCommentSuccess,
  fetchCommentsFailure,
  fetchCommentsSuccess,
  saveCommentFailure,
  saveCommentSuccess,
} from "../actions/CommentsAction";

function* fetchCommentsAPI() {
  try {
    const response = yield api.postMethod("documents_list");
    if (response.data.success) {
      yield put(fetchCommentsSuccess(response.data.data));
      const notificationMessage = getSuccessNotificationMessage(
        response.data.message
      );
      yield put(createNotification(notificationMessage));
    } else {
      yield put(fetchCommentsFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(fetchCommentsFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* saveCommentAPI() {
  try {
    const inputData = yield select((state) => state.docs.saveDocs.inputData);
    const response = yield api.postMethod("documents_save", inputData);
    if (response.data.success) {
      yield put(saveCommentSuccess(response.data.data));
      const notificationMessage = getSuccessNotificationMessage(
        response.data.message
      );
      yield put(createNotification(notificationMessage));
    } else {
      yield put(saveCommentFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(saveCommentFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* deleteCommentAPI() {
  try {
    const inputData = yield select((state) => state.docs.delDocs.inputData);
    const response = yield api.postMethod("documents_delete", inputData);
    if (response.data.success) {
      yield put(deleteCommentSuccess(response.data.data));
      const notificationMessage = getSuccessNotificationMessage(
        response.data.message
      );
      yield put(createNotification(notificationMessage));
    } else {
      yield put(deleteCommentFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(deleteCommentFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

export default function* pageSaga() {
  yield all([yield takeLatest(FETCH_VERI_DOCUMENT_START, fetchCommentsAPI)]);
  yield all([yield takeLatest(SAVE_VERI_DOC_START, saveCommentAPI)]);
  yield all([yield takeLatest(DEL_VERI_DOC_START, deleteCommentAPI)]);
}
