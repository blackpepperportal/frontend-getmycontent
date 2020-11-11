import { call, select, put, takeLatest, all } from "redux-saga/effects";
import api from "../../Environment";
import {
  FETCH_HOME_POSTS_START,
  FETCH_LISTS_DETAILS_START,
  FETCH_OTHERS_SINGLE_POST_START,
  FETCH_POST_SUGGESTION_START,
  POST_PAYMENT_STRIPE_START,
  POST_PAYMENT_WALLET_START,
  SEARCH_POST_START,
} from "../actions/ActionConstant";
import { createNotification } from "react-redux-notify";
import {
  getSuccessNotificationMessage,
  getErrorNotificationMessage,
} from "../../components/helper/NotificationMessage";

import {
  fetchHomePostsFailure,
  fetchHomePostsSuccess,
  fetchOtherSinglePostFailure,
  fetchOtherSinglePostSuccess,
  fetchPostSuggesstionFailure,
  fetchPostSuggesstionSuccess,
  searchPostFailure,
  searchPostSuccess,
  postPaymentStripeSuccess,
  postPaymentWalletSuccess,
  postPaymentStripeFailure,
  postPaymentWalletFailure,
  fetchListsDetailsSuccess,
  fetchListsDetailsFailure,
} from "../actions/HomeAction";

function* fetchHomePostAPI() {
  try {
    const response = yield api.postMethod("home");
    if (response.data.success) {
      yield put(fetchHomePostsSuccess(response.data.data));
    } else {
      yield put(fetchHomePostsFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(fetchHomePostsFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* searchPostAPI() {
  try {
    const inputData = yield select((state) => state.post.singlePost.inputData);
    const response = yield api.postMethod("posts_view", inputData);
    if (response.data.success) {
      yield put(searchPostSuccess(response.data.data));
    } else {
      yield put(searchPostFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(searchPostFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* fetchOtherSinglePostAPI() {
  try {
    const inputData = yield select((state) => state.post.singlePost.inputData);
    const response = yield api.postMethod("posts_view", inputData);
    if (response.data.success) {
      yield put(fetchOtherSinglePostSuccess(response.data.data));
      const notificationMessage = getSuccessNotificationMessage(
        response.data.message
      );
      yield put(createNotification(notificationMessage));
    } else {
      yield put(fetchOtherSinglePostFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(fetchOtherSinglePostFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* fetchPostSuggesstionAPI() {
  try {
    const inputData = yield select((state) => state.post.delPost.inputData);
    const response = yield api.postMethod("user_suggestions", inputData);
    if (response.data.success) {
      yield put(fetchPostSuggesstionSuccess(response.data.data));
    } else {
      yield put(fetchPostSuggesstionFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(fetchPostSuggesstionFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* postPaymentStripeAPI() {
  try {
    const inputData = yield select(
      (state) => state.post.changePostStatus.inputData
    );
    const response = yield api.postMethod("posts_status", inputData);
    if (response.data.success) {
      yield put(postPaymentStripeSuccess(response.data.data));
      const notificationMessage = getSuccessNotificationMessage(
        response.data.message
      );
      yield put(createNotification(notificationMessage));
    } else {
      yield put(postPaymentStripeFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(postPaymentStripeFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* postPaymentWalletAPI() {
  try {
    const inputData = yield select(
      (state) => state.post.changePostStatus.inputData
    );
    const response = yield api.postMethod("posts_status", inputData);
    if (response.data.success) {
      yield put(postPaymentWalletSuccess(response.data.data));
      const notificationMessage = getSuccessNotificationMessage(
        response.data.message
      );
      yield put(createNotification(notificationMessage));
    } else {
      yield put(postPaymentWalletFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(postPaymentWalletFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* fetchListsAPI() {
  try {
    const response = yield api.postMethod("lists_index");
    if (response.data.success) {
      yield put(fetchListsDetailsSuccess(response.data.data));
    } else {
      yield put(fetchListsDetailsFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(fetchListsDetailsFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

export default function* pageSaga() {
  yield all([yield takeLatest(FETCH_HOME_POSTS_START, fetchHomePostAPI)]);
  yield all([yield takeLatest(SEARCH_POST_START, searchPostAPI)]);
  yield all([
    yield takeLatest(FETCH_OTHERS_SINGLE_POST_START, fetchOtherSinglePostAPI),
  ]);
  yield all([
    yield takeLatest(FETCH_POST_SUGGESTION_START, fetchPostSuggesstionAPI),
  ]);
  yield all([
    yield takeLatest(POST_PAYMENT_STRIPE_START, postPaymentStripeAPI),
  ]);
  yield all([
    yield takeLatest(POST_PAYMENT_WALLET_START, postPaymentWalletAPI),
  ]);
  yield all([yield takeLatest(FETCH_LISTS_DETAILS_START, fetchListsAPI)]);
}
