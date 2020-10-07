import {
  FETCH_MEETING_START,
  FETCH_MEETING_SUCCESS,
  FETCH_MEETING_FAILURE,
  ADD_MEETING_START,
  ADD_MEETING_SUCCESS,
  ADD_MEETING_FAILURE,
  UPDATE_MEETING_START,
  UPDATE_MEETING_SUCCESS,
  UPDATE_MEETING_FAILURE,
  DELETE_MEETING_START,
  DELETE_MEETING_SUCCESS,
  DELETE_MEETING_FAILURE,
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
} from "../actions/ActionConstant";

const initialState = {
  meeting: {
    data: {},
    loading: true,
    error: false,
  },
  upComingmeeting: {
    data: {},
    loading: true,
    error: false,
  },
  addMeeting: {
    data: {},
    loading: true,
    error: false,
  },
  deleteMeeting: {
    data: {},
    loading: true,
    error: false,
    inputData: {},
  },
  searchMeeting: {
    data: {},
    loading: true,
    error: false,
    inputData: {},
  },
  singleMeeting: {
    data: {},
    loading: true,
    error: false,
    inputData: {},
  },
  updateMeeting: {
    data: {},
    loading: true,
    error: false,
  },
  joinMeeting: {
    data: {},
    loading: true,
    error: false,
    inputData: {},
  },
  startMeeting: {
    data: {},
    loading: true,
    error: false,
    inputData: {},
    buttonDisable: false,
    loadingButtonContent: null,
  },
  buttonDisable: false,
  loadingButtonContent: null,
};

const MeetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEETING_START:
      return {
        ...state,
        meeting: {
          data: {},
          loading: true,
          error: false,
        },
      };
    case FETCH_MEETING_SUCCESS:
      return {
        ...state,
        meeting: {
          data: action.data,
          loading: false,
          error: false,
        },
      };
    case FETCH_MEETING_FAILURE:
      return {
        ...state,
        meeting: {
          data: {},
          loading: true,
          error: action.error,
        },
      };
    case FETCH_UPCOMING_MEETING_START:
      return {
        ...state,
        upComingmeeting: {
          data: {},
          loading: true,
          error: false,
        },
      };
    case FETCH_UPCOMING_MEETING_SUCCESS:
      return {
        ...state,
        upComingmeeting: {
          data: action.data,
          loading: false,
          error: false,
        },
      };
    case FETCH_UPCOMING_MEETING_FAILURE:
      return {
        ...state,
        upComingmeeting: {
          data: {},
          loading: true,
          error: action.error,
        },
      };
    case ADD_MEETING_START:
      return {
        ...state,
        addMeeting: {
          data: action.data,
          loading: true,
          error: false,
        },
        buttonDisable: true,
        loadingButtonContent: "Loading... Please wait",
      };
    case ADD_MEETING_SUCCESS:
      return {
        ...state,
        addMeeting: {
          data: action.data,
          loading: false,
          error: false,
        },
        buttonDisable: false,
        loadingButtonContent: null,
      };
    case ADD_MEETING_FAILURE:
      return {
        ...state,
        addMeeting: {
          data: {},
          loading: true,
          error: action.error,
        },
        buttonDisable: false,
        loadingButtonContent: null,
      };
    case UPDATE_MEETING_START:
      return {
        ...state,
        updateMeeting: {
          data: action.data,
          loading: true,
          error: false,
        },
        buttonDisable: true,
        loadingButtonContent: "Loading... Please wait",
      };
    case UPDATE_MEETING_SUCCESS:
      return {
        ...state,
        updateMeeting: {
          data: action.data,
          loading: false,
          error: false,
        },
        buttonDisable: false,
        loadingButtonContent: null,
      };
    case UPDATE_MEETING_FAILURE:
      return {
        ...state,
        updateMeeting: {
          data: {},
          loading: true,
          error: action.error,
        },
        buttonDisable: false,
        loadingButtonContent: null,
      };
    case EDIT_MEETING:
      return {
        ...state,
        singleMeeting: {
          loading: false,
          error: false,
          data: {
            meeting_details: {
              ...state.singleMeeting.data.meeting_details,
              [action.name]: action.value,
            },
          },
        },
      };
    case DELETE_MEETING_START:
      return {
        ...state,
        deleteMeeting: {
          inputData: action.data,
          loading: true,
          error: false,
          data: {},
        },
      };
    case DELETE_MEETING_SUCCESS:
      return {
        ...state,
        deleteMeeting: {
          data: action.data,
          loading: false,
          error: false,
          inputData: {},
        },
      };
    case DELETE_MEETING_FAILURE:
      return {
        ...state,
        deleteMeeting: {
          data: {},
          loading: true,
          error: action.error,
          inputData: {},
        },
      };
    case SEARCH_MEETING_START:
      return {
        ...state,
        searchMeeting: {
          data: {},
          loading: true,
          error: false,
          inputData: action.data,
        },
      };
    case SEARCH_MEETING_SUCCESS:
      return {
        ...state,
        searchMeeting: {
          data: action.data,
          loading: false,
          error: false,
          inputData: {},
        },
      };
    case SEARCH_MEETING_FAILURE:
      return {
        ...state,
        searchMeeting: {
          data: {},
          loading: true,
          error: action.error,
          inputData: {},
        },
      };
    case FETCH_SINGLE_MEETING_START:
      return {
        ...state,
        singleMeeting: {
          data: {},
          loading: true,
          error: false,
          inputData: action.data,
        },
      };
    case FETCH_SINGLE_MEETING_SUCCESS:
      return {
        ...state,
        singleMeeting: {
          data: action.data,
          loading: false,
          error: false,
          inputData: {},
        },
      };
    case FETCH_SINGLE_MEETING_FAILURE:
      return {
        ...state,
        singleMeeting: {
          data: {},
          loading: true,
          error: action.error,
          inputData: {},
        },
      };
    case JOIN_MEETING_START:
      return {
        ...state,
        joinMeeting: {
          inputData: action.data,
          loading: true,
          error: false,
          data: {},
        },
      };
    case JOIN_MEETING_SUCCESS:
      return {
        ...state,
        joinMeeting: {
          data: action.data,
          loading: false,
          error: false,
          inputData: {},
        },
      };
    case JOIN_MEETING_FAILURE:
      return {
        ...state,
        joinMeeting: {
          data: {},
          loading: true,
          error: action.error,
          inputData: {},
        },
      };
    case START_MEETING_START:
      return {
        ...state,
        startMeeting: {
          inputData: action.data,
          loading: true,
          error: false,
          data: {},
          buttonDisable: true,
          loadingButtonContent: "Loading...",
        },
      };
    case START_MEETING_SUCCESS:
      return {
        ...state,
        startMeeting: {
          data: action.data,
          loading: false,
          error: false,
          inputData: {},
          buttonDisable: false,
          loadingButtonContent: null,
        },
      };
    case START_MEETING_FAILURE:
      return {
        ...state,
        startMeeting: {
          data: {},
          loading: true,
          error: action.error,
          inputData: {},
          buttonDisable: false,
          loadingButtonContent: null,
        },
      };

    default:
      return state;
  }
};

export default MeetingReducer;
