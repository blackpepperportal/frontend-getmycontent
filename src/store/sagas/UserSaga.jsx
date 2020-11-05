import React, { Component } from "react";
import { call, select, put, takeLatest, all } from "redux-saga/effects";
import {
  fetchUserDetailsSuccess,
  fetchUserDetailsFailure,
  updateUserDetailsSuccess,
  userLoginSuccess,
  userLoginFailure,
  userRegisterSuccess,
  userRegisterFailure,
  forgotPasswordSuccess,
  forgotPasswordFailure,
  deleteAccountSuccess,
  deleteAccountFailure,
  updateUserDetailsFailure,
  registerVerifyFailure,
  registerVerifyResendFailure,
  registerVerifySuccess,
  registerVerifyResendSuccess,
  notificationStatusUpdateSuccess,
  notificationStatusUpdateFailure,
} from "../actions/UserAction";

import api from "../../Environment";
import {
  FETCH_USER_DETAILS_START,
  UPDATE_USER_DETAILS_START,
  LOGIN_START,
  REGISTER_START,
  FORGOT_PASSWORD_START,
  DELETE_ACCOUNT_START,
  REGISTER_VERIFY_START,
  REGISTER_VERIFY_RESEND_START,
  NOTIFICATION_STATUS_UPDATE_START,
} from "../actions/ActionConstant";

import { createNotification } from "react-redux-notify";

import {
  getSuccessNotificationMessage,
  getErrorNotificationMessage,
} from "../../components/helper/NotificationMessage";
import { checkLogoutStatus } from "../actions/ErrorAction";

function* getUserDetailsAPI() {
  try {
    const response = yield api.postMethod("profile");

    if (response.data.success) {
      yield put(fetchUserDetailsSuccess(response.data));
    } else {
      yield put(fetchUserDetailsFailure(response.data.error));
      yield put(checkLogoutStatus(response.data));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(fetchUserDetailsFailure(error));
    const notificationMessage = getErrorNotificationMessage(
      error.response.data.error
    );
    yield put(createNotification(notificationMessage));
  }
}

function* updateUserDetailsAPI() {
  try {
    const userData = yield select((state) => state.users.profileInputData.data);
    const response = yield api.postMethod("update_profile", userData);
    if (response.data.success) {
      yield put(updateUserDetailsSuccess(response.data));
      localStorage.setItem("user_picture", response.data.data.picture);
      localStorage.setItem("name", response.data.data.name);
      localStorage.setItem("username", response.data.data.username);
      localStorage.setItem("user_unique_id", response.data.data.user_unique_id);
      localStorage.setItem(
        "is_document_verified",
        response.data.data.is_document_verified
      );
      const notificationMessage = getSuccessNotificationMessage(
        response.data.message
      );
      yield put(createNotification(notificationMessage));
      window.location.assign("/profile");
    } else {
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
      yield put(updateUserDetailsFailure(response.data.error));
    }
  } catch (error) {
    yield put(updateUserDetailsFailure(error));
    const notificationMessage = getErrorNotificationMessage(
      error.response.data.error
    );
    yield put(createNotification(notificationMessage));
  }
}

function* userLoginAPI() {
  try {
    const userData = yield select((state) => state.users.loginInputData.data);

    const response = yield api.postMethod("login", userData);
    yield put(userLoginSuccess(response.data));
    if (response.data.success) {
      if (response.data.code == 1001)
        window.location.assign("/register/verify");
      else {
        localStorage.setItem("userLoginStatus", true);
        localStorage.setItem("user_picture", response.data.data.picture);
        localStorage.setItem("name", response.data.data.name);
        localStorage.setItem("username", response.data.data.username);
        localStorage.setItem(
          "user_unique_id",
          response.data.data.user_unique_id
        );
        localStorage.setItem(
          "is_document_verified",
          response.data.data.is_document_verified
        );
        const notificationMessage = getSuccessNotificationMessage(
          response.data.message
        );
        yield put(createNotification(notificationMessage));
        window.location.assign("/home");
      }
      localStorage.setItem("userId", response.data.data.user_id);
      localStorage.setItem("accessToken", response.data.data.token);
    } else {
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(userLoginFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* userRegisterAPI() {
  try {
    const userData = yield select(
      (state) => state.users.registerInputData.data
    );
    const response = yield api.postMethod("register", userData);
    yield put(userRegisterSuccess(response.data));

    if (response.data.success) {
      if (response.data.code == 1001)
        window.location.assign("/register/verify");
      else {
        localStorage.setItem("userLoginStatus", true);
        localStorage.setItem("user_picture", response.data.data.picture);
        localStorage.setItem("username", response.data.data.username);
        localStorage.setItem("name", response.data.data.name);
        localStorage.setItem(
          "user_unique_id",
          response.data.data.user_unique_id
        );
        localStorage.setItem(
          "is_document_verified",
          response.data.data.is_document_verified
        );
        const notificationMessage = getSuccessNotificationMessage(
          response.data.message
        );
        yield put(createNotification(notificationMessage));
      }
      localStorage.setItem("userId", response.data.data.user_id);
      localStorage.setItem("accessToken", response.data.data.token);
    } else {
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(userRegisterFailure(error));
    const notificationMessage = getErrorNotificationMessage(
      error.response.data.error
    );
    yield put(createNotification(notificationMessage));
  }
}

function* forgotPasswordAPI() {
  try {
    const userData = yield select(
      (state) => state.users.forgotPasswordInputData.data
    );

    const response = yield api.postMethod("forgot_password", userData);
    yield put(forgotPasswordSuccess(response.data));
    if (response.data.success) {
      const notificationMessage = getSuccessNotificationMessage(
        response.data.message
      );
      yield put(createNotification(notificationMessage));
      // window.location.assign("/");
    } else {
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(forgotPasswordFailure(error));
    const notificationMessage = getErrorNotificationMessage(
      error.response.data.error
    );
    yield put(createNotification(notificationMessage));
  }
}

function* deleteAccountAPI() {
  try {
    const userData = yield select((state) => state.users.deleteAccount.data);
    const response = yield api.postMethod("delete_account", userData);
    yield put(deleteAccountSuccess(response.data));
    if (response.data.success) {
      const notificationMessage = getSuccessNotificationMessage(
        response.data.message
      );
      yield put(createNotification(notificationMessage));
      window.location.assign("/");
    } else {
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(deleteAccountFailure(error));
    const notificationMessage = getErrorNotificationMessage(
      error.response.data.error
    );
    yield put(createNotification(notificationMessage));
  }
}

function* registerVerify() {
  try {
    const inputData = yield select(
      (state) => state.users.registerVerify.inputData
    );

    const response = yield api.postMethod("verify_email", inputData);

    if (response.data.success) {
      yield put(registerVerifySuccess(response.data));
      localStorage.setItem("userId", response.data.data.user_id);
      localStorage.setItem("accessToken", response.data.data.token);
      localStorage.setItem("userLoginStatus", true);
      localStorage.setItem("user_picture", response.data.data.picture);
      localStorage.setItem("username", response.data.data.first_name);
      const notificationMessage = getSuccessNotificationMessage(
        response.data.message
      );
      yield put(createNotification(notificationMessage));
      window.location.assign("/welcome");
    } else {
      yield put(registerVerifyFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(registerVerifyFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* registerVerifyResend() {
  try {
    const response = yield api.postMethod("regenerate_email_verification_code");

    if (response.data.success) {
      yield put(registerVerifyResendSuccess(response.data));
      const notificationMessage = getSuccessNotificationMessage(
        response.data.message
      );
      yield put(createNotification(notificationMessage));
    } else {
      yield put(registerVerifyResendFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(registerVerifyResendFailure(error));
    const notificationMessage = getErrorNotificationMessage(
      error.response.data.error
    );
    yield put(createNotification(notificationMessage));
  }
}

function* notificationStatusUpdateAPI() {
  try {
    const userData = yield select(
      (state) => state.users.notificationUpdate.inputData
    );
    const response = yield api.postMethod(
      "notifications_status_update",
      userData
    );
    if (response.data.success) {
      yield put(notificationStatusUpdateSuccess(response.data));
      const notificationMessage = getSuccessNotificationMessage(
        response.data.message
      );
      yield put(createNotification(notificationMessage));
    } else {
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
      yield put(notificationStatusUpdateFailure(response.data.error));
    }
  } catch (error) {
    yield put(notificationStatusUpdateFailure(error));
    const notificationMessage = getErrorNotificationMessage(
      error.response.data.error
    );
    yield put(createNotification(notificationMessage));
  }
}

export default function* pageSaga() {
  yield all([
    yield takeLatest(FETCH_USER_DETAILS_START, getUserDetailsAPI),
    yield takeLatest(UPDATE_USER_DETAILS_START, updateUserDetailsAPI),
    yield takeLatest(LOGIN_START, userLoginAPI),
    yield takeLatest(REGISTER_START, userRegisterAPI),
    yield takeLatest(FORGOT_PASSWORD_START, forgotPasswordAPI),
    yield takeLatest(DELETE_ACCOUNT_START, deleteAccountAPI),
    yield takeLatest(REGISTER_VERIFY_START, registerVerify),
    yield takeLatest(REGISTER_VERIFY_RESEND_START, registerVerifyResend),
    yield takeLatest(
      NOTIFICATION_STATUS_UPDATE_START,
      notificationStatusUpdateAPI
    ),
  ]);
}
