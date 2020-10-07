import {
  FETCH_RECORDING_START,
  FETCH_RECORDING_SUCCESS,
  FETCH_RECORDING_FAILURE,
  DELETE_RECORDING_START,
  DELETE_RECORDING_SUCCESS,
  DELETE_RECORDING_FAILURE,
  SEARCH_RECORDING_START,
  SEARCH_RECORDING_SUCCESS,
  SEARCH_RECORDING_FAILURE,
  FETCH_SINGLE_RECORDING_START,
  FETCH_SINGLE_RECORDING_SUCCESS,
  FETCH_SINGLE_RECORDING_FAILURE,
} from "./ActionConstant";

// Get Recording actions.

export function fetchRecordingStart(data) {
  return {
    type: FETCH_RECORDING_START,
    data,
  };
}

export function fetchRecordingSuccess(data) {
  return {
    type: FETCH_RECORDING_SUCCESS,
    data,
  };
}

export function fetchRecordingFailure(error) {
  return {
    type: FETCH_RECORDING_FAILURE,
    error,
  };
}

// Delete Recording actions.

export function deleteRecordingStart(data) {
  return {
    type: DELETE_RECORDING_START,
    data,
  };
}

export function deleteRecordingSuccess(data) {
  return {
    type: DELETE_RECORDING_SUCCESS,
    data,
  };
}

export function deleteRecordingFailure(error) {
  return {
    type: DELETE_RECORDING_FAILURE,
    error,
  };
}

// Search Recording actions.

export function searchRecordingStart(data) {
  return {
    type: SEARCH_RECORDING_START,
    data,
  };
}

export function searchRecordingSuccess(data) {
  return {
    type: SEARCH_RECORDING_SUCCESS,
    data,
  };
}

export function searchRecordingFailure(error) {
  return {
    type: SEARCH_RECORDING_FAILURE,
    error,
  };
}

// Single Recording actions.

export function fetchSingleRecordingStart(data) {
  return {
    type: FETCH_SINGLE_RECORDING_START,
    data,
  };
}

export function fetchSingleRecordingSuccess(data) {
  return {
    type: FETCH_SINGLE_RECORDING_SUCCESS,
    data,
  };
}

export function fetchSingleRecordingFailure(error) {
  return {
    type: FETCH_SINGLE_RECORDING_FAILURE,
    error,
  };
}
