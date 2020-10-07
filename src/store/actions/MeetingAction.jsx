import {
  FETCH_MEETING_START,
  FETCH_MEETING_SUCCESS,
  FETCH_MEETING_FAILURE,
  DELETE_MEETING_START,
  DELETE_MEETING_SUCCESS,
  DELETE_MEETING_FAILURE,
  ADD_MEETING_START,
  ADD_MEETING_SUCCESS,
  ADD_MEETING_FAILURE,
  UPDATE_MEETING_START,
  UPDATE_MEETING_SUCCESS,
  UPDATE_MEETING_FAILURE,
  SEARCH_MEETING_START,
  SEARCH_MEETING_SUCCESS,
  SEARCH_MEETING_FAILURE,
  FETCH_SINGLE_MEETING_START,
  FETCH_SINGLE_MEETING_SUCCESS,
  FETCH_SINGLE_MEETING_FAILURE,
  FETCH_UPCOMING_MEETING_START,
  FETCH_UPCOMING_MEETING_SUCCESS,
  FETCH_UPCOMING_MEETING_FAILURE,
  JOIN_MEETING_START,
  JOIN_MEETING_SUCCESS,
  JOIN_MEETING_FAILURE,
  START_MEETING_START,
  START_MEETING_SUCCESS,
  START_MEETING_FAILURE,
  EDIT_MEETING,
} from "./ActionConstant";

// Get Meeting actions.

export function fetchMeetingStart(data) {
  return {
    type: FETCH_MEETING_START,
    data,
  };
}

export function fetchMeetingSuccess(data) {
  return {
    type: FETCH_MEETING_SUCCESS,
    data,
  };
}

export function fetchMeetingFailure(error) {
  return {
    type: FETCH_MEETING_FAILURE,
    error,
  };
}

// Add Meeting

export function addMeetingStart(data) {
  return {
    type: ADD_MEETING_START,
    data,
  };
}

export function addMeetingSuccess(data) {
  return {
    type: ADD_MEETING_SUCCESS,
    data,
  };
}

export function addMeetingFailure(error) {
  return {
    type: ADD_MEETING_FAILURE,
    error,
  };
}

// Update Meeting

export function updateMeetingStart(data) {
  return {
    type: UPDATE_MEETING_START,
    data,
  };
}

export function updateMeetingSuccess(data) {
  return {
    type: UPDATE_MEETING_SUCCESS,
    data,
  };
}

export function updateMeetingFailure(error) {
  return {
    type: UPDATE_MEETING_FAILURE,
    error,
  };
}

// Delete Meeting actions.

export function deleteMeetingStart(data) {
  return {
    type: DELETE_MEETING_START,
    data,
  };
}

export function deleteMeetingSuccess(data) {
  return {
    type: DELETE_MEETING_SUCCESS,
    data,
  };
}

export function deleteMeetingFailure(error) {
  return {
    type: DELETE_MEETING_FAILURE,
    error,
  };
}

// Search Meeting actions.

export function searchMeetingStart(data) {
  return {
    type: SEARCH_MEETING_START,
    data,
  };
}

export function searchMeetingSuccess(data) {
  return {
    type: SEARCH_MEETING_SUCCESS,
    data,
  };
}

export function searchMeetingFailure(error) {
  return {
    type: SEARCH_MEETING_FAILURE,
    error,
  };
}

// Single Meeting actions.

export function fetchSingleMeetingStart(data) {
  return {
    type: FETCH_SINGLE_MEETING_START,
    data,
  };
}

export function fetchSingleMeetingSuccess(data) {
  return {
    type: FETCH_SINGLE_MEETING_SUCCESS,
    data,
  };
}

export function fetchSingleMeetingFailure(error) {
  return {
    type: FETCH_SINGLE_MEETING_FAILURE,
    error,
  };
}

// upcoming meeting action.

export function fetchUpcomingMeetingStart(data) {
  return {
    type: FETCH_UPCOMING_MEETING_START,
    data,
  };
}

export function fetchUpcomingMeetingSuccess(data) {
  return {
    type: FETCH_UPCOMING_MEETING_SUCCESS,
    data,
  };
}

export function fetchUpcomingMeetingFailure(error) {
  return {
    type: FETCH_UPCOMING_MEETING_FAILURE,
    error,
  };
}

// Join meeting action.

export function joinMeetingStart(data) {
  return {
    type: JOIN_MEETING_START,
    data,
  };
}

export function joinMeetingSuccess(data) {
  return {
    type: JOIN_MEETING_SUCCESS,
    data,
  };
}

export function joinMeetingFailure(error) {
  return {
    type: JOIN_MEETING_FAILURE,
    error,
  };
}

// Edit Meting details action.

export function editMeeting(name, value) {
  return {
    type: EDIT_MEETING,
    name,
    value,
  };
}

export function startMeetingStart(data) {
  return {
    type: START_MEETING_START,
    data,
  };
}

export function startMeetingSuccess(data) {
  return {
    type: START_MEETING_SUCCESS,
    data,
  };
}

export function startMeetingFailure(error) {
  return {
    type: START_MEETING_FAILURE,
    error,
  };
}
