import { call, select, put, takeLatest, all } from "redux-saga/effects";
import api from "../../Environment";

import { createNotification } from "react-redux-notify";
import {
  getSuccessNotificationMessage,
  getErrorNotificationMessage,
} from "../../components/helper/NotificationMessage";
import {
  fetchRecordingSuccess,
  fetchRecordingFailure,
  deleteRecordingSuccess,
  deleteRecordingFailure,
  searchRecordingSuccess,
  searchRecordingFailure,
  fetchSingleRecordingSuccess,
  fetchSingleRecordingFailure,
} from "../actions/RecordingAction";
import {
  FETCH_RECORDING_START,
  DELETE_RECORDING_START,
  SEARCH_RECORDING_START,
  FETCH_SINGLE_RECORDING_START,
} from "../actions/ActionConstant";

function* fetchRecordingAPI() {
  try {
    const response = yield api.postMethod("meeting_records_index");
    if (response.data.success) {
      yield put(fetchRecordingSuccess(response.data.data));
    } else {
      yield put(fetchRecordingFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(fetchRecordingFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* deleteRecordingAPI() {
  try {
    const inputData = yield select(
      (state) => state.recording.deleteRecording.inputData
    );
    const response = yield api.postMethod("recordings_delete", inputData);

    if (response.data.success) {
      yield put(deleteRecordingSuccess(response.data.data));
      const notificationMessage = getSuccessNotificationMessage(
        response.data.message
      );
      yield put(createNotification(notificationMessage));
    } else {
      yield put(deleteRecordingFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(deleteRecordingFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* searchRecordingAPI() {
  try {
    const inputData = yield select(
      (state) => state.recording.searchRecording.inputData
    );
    const response = yield api.postMethod("recordings_search", inputData);

    if (response.data.success) {
      yield put(searchRecordingSuccess(response.data.data));
      const notificationMessage = getSuccessNotificationMessage(
        response.data.message
      );
      yield put(createNotification(notificationMessage));
    } else {
      yield put(searchRecordingFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(searchRecordingFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* fetchSingleRecordingAPI() {
  try {
    const inputData = yield select(
      (state) => state.recording.singleRecording.inputData
    );
    const response = yield api.postMethod("meeting_records_view", inputData);

    if (response.data.success) {
      yield put(fetchSingleRecordingSuccess(response.data.data));
      const notificationMessage = getSuccessNotificationMessage(
        response.data.message
      );
      yield put(createNotification(notificationMessage));
    } else {
      yield put(fetchSingleRecordingFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(fetchSingleRecordingFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

export default function* pageSaga() {
  yield all([yield takeLatest(FETCH_RECORDING_START, fetchRecordingAPI)]);
  yield all([yield takeLatest(DELETE_RECORDING_START, deleteRecordingAPI)]);
  yield all([yield takeLatest(SEARCH_RECORDING_START, searchRecordingAPI)]);
  yield all([
    yield takeLatest(FETCH_SINGLE_RECORDING_START, fetchSingleRecordingAPI),
  ]);
}
