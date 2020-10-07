import { call, select, put, takeLatest, all } from "redux-saga/effects";
import api from "../../Environment";

import { createNotification } from "react-redux-notify";
import {
  getSuccessNotificationMessage,
  getErrorNotificationMessage,
} from "../../components/helper/NotificationMessage";
import {
  fetchMeetingSuccess,
  fetchMeetingFailure,
  addMeetingSuccess,
  addMeetingFailure,
  deleteMeetingSuccess,
  deleteMeetingFailure,
  searchMeetingSuccess,
  searchMeetingFailure,
  fetchSingleMeetingSuccess,
  fetchSingleMeetingFailure,
  fetchUpcomingMeetingSuccess,
  fetchUpcomingMeetingFailure,
  fetchMeetingStart,
  updateMeetingSuccess,
  updateMeetingFailure,
  joinMeetingSuccess,
  joinMeetingFailure,
  startMeetingSuccess,
  startMeetingFailure,
} from "../actions/MeetingAction";
import {
  FETCH_MEETING_START,
  ADD_MEETING_START,
  DELETE_MEETING_START,
  SEARCH_MEETING_START,
  FETCH_SINGLE_MEETING_START,
  FETCH_UPCOMING_MEETING_START,
  UPDATE_MEETING_START,
  JOIN_MEETING_START,
  START_MEETING_START,
} from "../actions/ActionConstant";
import { checkLogoutStatus } from "../actions/ErrorAction";

function* fetchMeetingAPI() {
  try {
    const response = yield api.postMethod("meetings_index");
    if (response.data.success) {
      yield put(fetchMeetingSuccess(response.data));
    } else {
      yield put(checkLogoutStatus(response.data));
      yield put(fetchMeetingFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(fetchMeetingFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* fetchUpComingMeetingAPI() {
  try {
    const response = yield api.postMethod("meetings_index");
    if (response.data.success) {
      yield put(fetchUpcomingMeetingSuccess(response.data));
    } else {
      yield put(checkLogoutStatus(response.data));
      yield put(fetchUpcomingMeetingFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(fetchUpcomingMeetingFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* addMeetingAPI() {
  try {
    const inputData = yield select((state) => state.meeting.addMeeting.data);
    const response = yield api.postMethod("meetings_save", inputData);

    if (response.data.success) {
      yield put(addMeetingSuccess(response.data));
      const notificationMessage = getSuccessNotificationMessage(
        response.data.message
      );
      yield put(createNotification(notificationMessage));
      window.location.assign("/meetings");
    } else {
      yield put(checkLogoutStatus(response.data));
      yield put(addMeetingFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(addMeetingFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* updateMeetingAPI() {
  try {
    const inputData = yield select((state) => state.meeting.updateMeeting.data);
    const response = yield api.postMethod("meetings_save", inputData);

    if (response.data.success) {
      yield put(updateMeetingSuccess(response.data));
      const notificationMessage = getSuccessNotificationMessage(
        response.data.message
      );
      yield put(createNotification(notificationMessage));
      window.location.assign("/meetings");
    } else {
      yield put(checkLogoutStatus(response.data));
      yield put(updateMeetingFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(updateMeetingFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* deleteMeetingAPI() {
  try {
    const inputData = yield select(
      (state) => state.meeting.deleteMeeting.inputData
    );
    const response = yield api.postMethod("meetings_delete", inputData);

    if (response.data.success) {
      yield put(deleteMeetingSuccess(response.data));
      const notificationMessage = getSuccessNotificationMessage(
        response.data.message
      );
      yield put(createNotification(notificationMessage));
      yield put(fetchMeetingStart());
    } else {
      yield put(checkLogoutStatus(response.data));
      yield put(deleteMeetingFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(deleteMeetingFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* searchMeetingAPI() {
  try {
    const inputData = yield select(
      (state) => state.meeting.searchMeeting.inputData
    );
    const response = yield api.postMethod("meetings_search", inputData);

    if (response.data.success) {
      yield put(searchMeetingSuccess(response.data));
      const notificationMessage = getSuccessNotificationMessage(
        response.data.message
      );
      yield put(createNotification(notificationMessage));
    } else {
      yield put(checkLogoutStatus(response.data));
      yield put(searchMeetingFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(searchMeetingFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* fetchSingleMeetingAPI() {
  try {
    const inputData = yield select(
      (state) => state.meeting.singleMeeting.inputData
    );
    const response = yield api.postMethod("meetings_view", inputData);

    if (response.data.success) {
      yield put(fetchSingleMeetingSuccess(response.data.data));
    } else {
      yield put(checkLogoutStatus(response.data));
      yield put(fetchSingleMeetingFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(fetchSingleMeetingFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* startMeetingAPI() {
  try {
    const response = yield api.postMethod("meetings_now_save");

    if (response.data.success) {
      yield put(startMeetingSuccess(response.data.data));
      window.location.assign(response.data.data.join_url);
    } else {
      yield put(checkLogoutStatus(response.data));
      yield put(startMeetingFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(startMeetingFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* joinMeetingAPI() {
  try {
    const inputData = yield select(
      (state) => state.meeting.joinMeeting.inputData
    );
    const response = yield api.postMethod("meetings_join", inputData);

    if (response.data.success) {
      yield put(joinMeetingSuccess(response.data));
      const notificationMessage = getSuccessNotificationMessage(
        response.data.message
      );
      yield put(createNotification(notificationMessage));
      window.location.assign(response.data.data.join_url);
    } else {
      yield put(checkLogoutStatus(response.data));
      yield put(joinMeetingFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(joinMeetingFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

export default function* pageSaga() {
  yield all([yield takeLatest(FETCH_MEETING_START, fetchMeetingAPI)]);
  yield all([
    yield takeLatest(FETCH_UPCOMING_MEETING_START, fetchUpComingMeetingAPI),
  ]);
  yield all([yield takeLatest(ADD_MEETING_START, addMeetingAPI)]);
  yield all([yield takeLatest(UPDATE_MEETING_START, updateMeetingAPI)]);
  yield all([yield takeLatest(DELETE_MEETING_START, deleteMeetingAPI)]);
  yield all([yield takeLatest(SEARCH_MEETING_START, searchMeetingAPI)]);
  yield all([yield takeLatest(JOIN_MEETING_START, joinMeetingAPI)]);
  yield all([yield takeLatest(START_MEETING_START, startMeetingAPI)]);
  yield all([
    yield takeLatest(FETCH_SINGLE_MEETING_START, fetchSingleMeetingAPI),
  ]);
}
