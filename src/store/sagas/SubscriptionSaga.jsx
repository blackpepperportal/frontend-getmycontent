import { call, select, put, takeLatest, all } from "redux-saga/effects";
import {
  fetchSubscriptionSuccess,
  fetchSubscriptionFailure,
  fetchMySubscriptionSuccess,
  fetchMySubscriptionFailure,
  fetchSingleSubscriptionSuccess,
  fetchSingleSubscriptionFailure,
  subscriptionPaymentSuccess,
  subscriptionPaymentFailure,
  enableSubscriptionAutoRenewalSuccess,
  enableSubscriptionAutoRenewalFailure,
  disableSubscriptionAutoRenewalSuccess,
  disableSubscriptionAutoRenewalFailure,
  fetchMySubscriptionStart,
} from "../actions/SubscriptionAction";

import api from "../../Environment";
import {
  FETCH_SUBSCRIPTION_START,
  FETCH_MY_SUBSCRIPTION_START,
  FETCH_SINGLE_SUBSCRIPTION_START,
  SUBSCRIPTION_PAYMENT_START,
  ENABLE_SUBSCRIPTION_AUTORENEWAL_START,
  DISABLE_SUBSCRIPTION_AUTORENEWAL_START,
} from "../actions/ActionConstant";

import { createNotification } from "react-redux-notify";
import { checkLogoutStatus } from "../actions/ErrorAction";

import {
  getSuccessNotificationMessage,
  getErrorNotificationMessage,
} from "../../components/helper/NotificationMessage";

function* getSubscriptionAPI() {
  try {
    const response = yield api.postMethod("subscriptions_index");
    if (response.data.success) {
      yield put(fetchSubscriptionSuccess(response.data.data));
    } else {
      yield put(checkLogoutStatus(response.data));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
      yield put(fetchSubscriptionFailure(response.data.error));
    }
  } catch (error) {
    yield put(fetchSubscriptionFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* getMySubscriptionAPI() {
  try {
    const response = yield api.postMethod("subscriptions_history");
    if (response.data.success) {
      yield put(fetchMySubscriptionSuccess(response.data.data));
    } else {
      yield put(checkLogoutStatus(response.data));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
      yield put(fetchMySubscriptionFailure(response.data.error));
    }
  } catch (error) {
    yield put(fetchMySubscriptionFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* getSingleSubscriptionAPI() {
  try {
    const subscriptionInputData = yield select(
      (state) => state.subscriptions.singleSubInputData.data
    );
    const response = yield api.postMethod(
      "subscriptions_view",
      subscriptionInputData
    );
    if (response.data.success) {
      yield put(fetchSingleSubscriptionSuccess(response.data.data));
    } else {
      yield put(checkLogoutStatus(response.data));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
      yield put(fetchSingleSubscriptionFailure(response.data.error));
    }
  } catch (error) {
    yield put(fetchSingleSubscriptionFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* subscriptionPaymentAPI() {
  try {
    const subscriptioDetails = yield select(
      (state) => state.subscriptions.subscriptionPayment.inputData
    );
    const response = yield api.postMethod(
      "subscriptions_payment_by_stripe",
      subscriptioDetails
    );
    if (response.data.success) {
      const notificationMessage = getSuccessNotificationMessage(
        response.data.message
      );
      yield put(createNotification(notificationMessage));
      yield put(subscriptionPaymentSuccess(response.data.data));
      window.location.assign("/my-subscriptions");
    } else {
      yield put(checkLogoutStatus(response.data));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
      yield put(subscriptionPaymentFailure(response.data.error));
    }
  } catch (error) {
    yield put(subscriptionPaymentFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* enableSubscriptionAutoRenewal() {
  try {
    const inputData = yield select(
      (state) => state.subscriptions.autoRenewalEnable.inputData
    );
    const response = yield api.postMethod(
      "subscriptions_autorenewal_enable",
      inputData
    );

    if (response.data.success) {
      const notificationMessage = getSuccessNotificationMessage(
        response.data.message
      );
      yield put(createNotification(notificationMessage));
      yield put(enableSubscriptionAutoRenewalSuccess(response.data.data));
      yield put(fetchMySubscriptionStart());
    } else {
      yield put(checkLogoutStatus(response.data));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
      yield put(enableSubscriptionAutoRenewalFailure(response.data.error));
    }
  } catch (error) {
    yield put(enableSubscriptionAutoRenewalFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* disableSubscriptionAutoRenewal() {
  try {
    const inputData = yield select(
      (state) => state.subscriptions.autoRenewalDisable.inputData
    );
    const response = yield api.postMethod(
      "subscriptions_autorenewal_cancel",
      inputData
    );
    if (response.data.success) {
      yield put(disableSubscriptionAutoRenewalSuccess(response.data.data));
      const notificationMessage = getSuccessNotificationMessage(
        response.data.message
      );
      yield put(createNotification(notificationMessage));
      yield put(fetchMySubscriptionStart());
    } else {
      yield put(checkLogoutStatus(response.data));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
      yield put(disableSubscriptionAutoRenewalFailure(response.data.error));
    }
  } catch (error) {
    yield put(disableSubscriptionAutoRenewalFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

export default function* pageSaga() {
  yield all([yield takeLatest(FETCH_SUBSCRIPTION_START, getSubscriptionAPI)]);
  yield all([
    yield takeLatest(FETCH_MY_SUBSCRIPTION_START, getMySubscriptionAPI),
  ]);
  yield all([
    yield takeLatest(FETCH_SINGLE_SUBSCRIPTION_START, getSingleSubscriptionAPI),
  ]);
  yield all([
    yield takeLatest(SUBSCRIPTION_PAYMENT_START, subscriptionPaymentAPI),
  ]);
  yield all([
    yield takeLatest(
      ENABLE_SUBSCRIPTION_AUTORENEWAL_START,
      enableSubscriptionAutoRenewal
    ),
  ]);
  yield all([
    yield takeLatest(
      DISABLE_SUBSCRIPTION_AUTORENEWAL_START,
      disableSubscriptionAutoRenewal
    ),
  ]);
}
