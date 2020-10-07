import {
  FETCH_USER_DETAILS_START,
  FETCH_USER_DETAILS_SUCCESS,
  FETCH_USER_DETAILS_FAILURE,
  EDIT_USER_DETAILS,
  UPDATE_USER_DETAILS_START,
  UPDATE_USER_DETAILS_SUCCESS,
  UPDATE_USER_DETAILS_FAILURE,
  CHANGE_PASSWORD_START,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
  EDIT_CHANGE_PASSWORD,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  GET_LOGIN_DETAILS,
  GET_REGISTER_DETAILS,
  FORGOT_PASSWORD_START,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  DELETE_ACCOUNT_START,
  DELETE_ACCOUNT_SUCCESS,
  DELETE_ACCOUNT_FAILURE,
  GET_FORGOT_PASSWORD_DETAILS,
  FETCH_DASHBOARD_START,
  FETCH_DASHBOARD_SUCCESS,
  FETCH_DASHBOARD_FAILURE,
} from "./ActionConstant";

// Get user details actions.

export function fetchUserDetailsStart(data) {
  return {
    type: FETCH_USER_DETAILS_START,
    data,
  };
}

export function fetchUserDetailsSuccess(data) {
  return {
    type: FETCH_USER_DETAILS_SUCCESS,
    data,
  };
}

export function fetchUserDetailsFailure(error) {
  return {
    type: FETCH_USER_DETAILS_FAILURE,
    error,
  };
}

// Edit user details action.

export function editUserDetails(name, value) {
  return {
    type: EDIT_USER_DETAILS,
    name,
    value,
  };
}

// Update user detatils actions

export function updateUserDetailsStart(data) {
  return {
    type: UPDATE_USER_DETAILS_START,
    data,
  };
}

export function updateUserDetailsSuccess(data) {
  return {
    type: UPDATE_USER_DETAILS_SUCCESS,
    data,
  };
}

export function updateUserDetailsFailure(error) {
  return {
    type: UPDATE_USER_DETAILS_FAILURE,
    error,
  };
}

// change password edit option

export function editChangePassword(name, value) {
  return {
    type: EDIT_CHANGE_PASSWORD,
    name,
    value,
  };
}

// Change password actions.

export function changePasswordStart(data) {
  return {
    type: CHANGE_PASSWORD_START,
    data,
  };
}

export function changePasswordSuccess(data) {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
    data,
  };
}

export function changePasswordFailure(error) {
  return {
    type: CHANGE_PASSWORD_FAILURE,
    error,
  };
}

// Get login Input

export function getLoginInputData(name, value) {
  return {
    type: GET_LOGIN_DETAILS,
    name,
    value,
  };
}

// User login actions.

export function userLoginStart(data) {
  return {
    type: LOGIN_START,
    data,
  };
}

export function userLoginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    data,
  };
}

export function userLoginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error,
  };
}

// Get register Input

export function getRegisterInputData(name, value) {
  return {
    type: GET_REGISTER_DETAILS,
    name,
    value,
  };
}

// User Register actions.

export function userRegisterStart(data) {
  return {
    type: REGISTER_START,
    data,
  };
}

export function userRegisterSuccess(data) {
  return {
    type: REGISTER_SUCCESS,
    data,
  };
}

export function userRegisterFailure(error) {
  return {
    type: REGISTER_FAILURE,
    error,
  };
}

// Get forgot password Input

export function getForgotPasswordInputData(name, value) {
  return {
    type: GET_FORGOT_PASSWORD_DETAILS,
    name,
    value,
  };
}

// User FORGOT_PASSWORD actions.

export function forgotPasswordStart(data) {
  return {
    type: FORGOT_PASSWORD_START,
    data,
  };
}

export function forgotPasswordSuccess(data) {
  return {
    type: FORGOT_PASSWORD_SUCCESS,
    data,
  };
}

export function forgotPasswordFailure(error) {
  return {
    type: FORGOT_PASSWORD_FAILURE,
    error,
  };
}

// User Delete Account actions.

export function deleteAccountStart(data) {
  return {
    type: DELETE_ACCOUNT_START,
    data,
  };
}

export function deleteAccountSuccess(data) {
  return {
    type: DELETE_ACCOUNT_SUCCESS,
    data,
  };
}

export function deleteAccountFailure(error) {
  return {
    type: DELETE_ACCOUNT_FAILURE,
    error,
  };
}

// Fetch Dashboard actions.

export function fetchDashboardStart(data) {
  return {
    type: FETCH_DASHBOARD_START,
    data,
  };
}

export function fetchDashboardSuccess(data) {
  return {
    type: FETCH_DASHBOARD_SUCCESS,
    data,
  };
}

export function fetchDashboardFailure(error) {
  return {
    type: FETCH_DASHBOARD_FAILURE,
    error,
  };
}
