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
  fetchDashboardSuccess,
  fetchDashboardFailure,
  fetchUserDetailsStart,
} from "../actions/UserAction";

import api from "../../Environment";
import {
  FETCH_USER_DETAILS_START,
  UPDATE_USER_DETAILS_START,
  LOGIN_START,
  REGISTER_START,
  FORGOT_PASSWORD_START,
  DELETE_ACCOUNT_START,
  FETCH_DASHBOARD_START,
} from "../actions/ActionConstant";

import { createNotification } from "react-redux-notify";
import { checkLogoutStatus } from "../actions/ErrorAction";

import {
  getSuccessNotificationMessage,
  getErrorNotificationMessage,
} from "../../components/helper/NotificationMessage";

function* getUserDetailsAPI() {
  try {
    const response = yield api.postMethod("profile");
    if (response.data.success) {
      localStorage.setItem("user_picture", response.data.data.picture);
      localStorage.setItem("user_cover", response.data.data.cover);
      localStorage.setItem("username", response.data.data.name);
      localStorage.setItem("no_of_users", response.data.data.no_of_users);
      localStorage.setItem("no_of_minutes", response.data.data.no_of_minutes);
      yield put(fetchUserDetailsSuccess(response.data));
    } else {
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
      yield put(fetchUserDetailsFailure(response.data.error));
    }
  } catch (error) {
    yield put(fetchUserDetailsFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
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
      localStorage.setItem("user_cover", response.data.data.cover);
      localStorage.setItem("username", response.data.data.name);
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
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* userLoginAPI() {
  try {
    const userData = yield select((state) => state.users.loginInputData.data);

    const response = yield api.postMethod("login", userData);
    if (response.data.success) {
      localStorage.setItem("userId", response.data.data.id);
      localStorage.setItem("accessToken", response.data.data.token);
      localStorage.setItem("userLoginStatus", true);
      localStorage.setItem("user_picture", response.data.data.picture);
      localStorage.setItem("user_cover", response.data.data.cover);
      localStorage.setItem("username", response.data.data.name);
      localStorage.setItem("no_of_users", response.data.data.no_of_users);
      localStorage.setItem("no_of_minutes", response.data.data.no_of_minutes);
      const notificationMessage = getSuccessNotificationMessage(
        response.data.message
      );
      yield put(createNotification(notificationMessage));
      yield put(userLoginSuccess(response.data));
      window.location.assign("/dashboard");
    } else {
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
      yield put(userLoginFailure(response.data.error));
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
    if (response.data.success) {
      localStorage.setItem("userId", response.data.data.id);
      localStorage.setItem("accessToken", response.data.data.token);
      localStorage.setItem("userLoginStatus", true);
      localStorage.setItem("user_picture", response.data.data.picture);
      localStorage.setItem("username", response.data.data.name);
      localStorage.setItem("no_of_users", response.data.data.no_of_users);
      localStorage.setItem("no_of_minutes", response.data.data.no_of_minutes);
      const notificationMessage = getSuccessNotificationMessage(
        response.data.message
      );
      yield put(createNotification(notificationMessage));
      yield put(userRegisterSuccess(response.data));
      setTimeout(() => {
        window.location.assign("/dashboard");
      }, 1000);
    } else {
      yield put(userRegisterFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(userRegisterFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
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
      window.location.assign("/login");
    } else {
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(forgotPasswordFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
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
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userId");
      localStorage.removeItem("userLoginStatus");
      localStorage.removeItem("username");
      localStorage.removeItem("user_picture");
      localStorage.removeItem("user_cover");
      localStorage.removeItem("no_of_users");
      localStorage.removeItem("no_of_minutes");
      window.location.assign("/");
    } else {
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(deleteAccountFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* fetchDashboardAPI() {
  try {
    const response = yield api.postMethod("dashboard");
    if (response.data.success) {
      yield put(fetchDashboardSuccess(response.data.data));
    } else {
      yield put(checkLogoutStatus(response.data));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
      yield put(fetchDashboardFailure(response.data.error));
    }
  } catch (error) {
    yield put(fetchDashboardFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
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
    yield takeLatest(FETCH_DASHBOARD_START, fetchDashboardAPI),
  ]);
}
