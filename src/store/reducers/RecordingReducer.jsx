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
} from "../actions/ActionConstant";

const initialState = {
  recording: {
    data: {},
    loading: true,
    error: false,
  },
  deleteRecording: {
    data: {},
    loading: true,
    error: false,
    inputData: {},
  },
  searchRecording: {
    data: {},
    loading: true,
    error: false,
    inputData: {},
  },
  singleRecording: {
    data: {},
    loading: true,
    error: false,
    inputData: {},
  },
  buttonDisable: false,
  loadingButtonContent: null,
};

const RecordingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECORDING_START:
      return {
        ...state,
        recording: {
          data: {},
          loading: true,
          error: false,
        },
      };
    case FETCH_RECORDING_SUCCESS:
      return {
        ...state,
        recording: {
          data: action.data,
          loading: false,
          error: false,
        },
      };
    case FETCH_RECORDING_FAILURE:
      return {
        ...state,
        recording: {
          data: {},
          loading: true,
          error: action.error,
        },
      };
    case DELETE_RECORDING_START:
      return {
        ...state,
        deleteRecording: {
          inputData: action.data,
          loading: true,
          error: false,
          data: {},
        },
      };
    case DELETE_RECORDING_SUCCESS:
      return {
        ...state,
        deleteRecording: {
          data: action.data,
          loading: false,
          error: false,
          inputData: {},
        },
      };
    case DELETE_RECORDING_FAILURE:
      return {
        ...state,
        deleteRecording: {
          data: {},
          loading: true,
          error: action.error,
          inputData: {},
        },
      };
    case SEARCH_RECORDING_START:
      return {
        ...state,
        searchRecording: {
          data: {},
          loading: true,
          error: false,
          inputData: action.data,
        },
      };
    case SEARCH_RECORDING_SUCCESS:
      return {
        ...state,
        searchRecording: {
          data: action.data,
          loading: false,
          error: false,
          inputData: {},
        },
      };
    case SEARCH_RECORDING_FAILURE:
      return {
        ...state,
        searchRecording: {
          data: {},
          loading: true,
          error: action.error,
          inputData: {},
        },
      };
    case FETCH_SINGLE_RECORDING_START:
      return {
        ...state,
        singleRecording: {
          data: {},
          loading: true,
          error: false,
          inputData: action.data,
        },
      };
    case FETCH_SINGLE_RECORDING_SUCCESS:
      return {
        ...state,
        singleRecording: {
          data: action.data,
          loading: false,
          error: false,
          inputData: {},
        },
      };
    case FETCH_SINGLE_RECORDING_FAILURE:
      return {
        ...state,
        singleRecording: {
          data: {},
          loading: true,
          error: action.error,
          inputData: {},
        },
      };

    default:
      return state;
  }
};

export default RecordingReducer;
