import {
  FETCH_USER_DETAILS_START,
  FETCH_USER_DETAILS_SUCCESS,
  FETCH_USER_DETAILS_FAILURE,
  EDIT_USER_DETAILS,
  UPDATE_USER_DETAILS_START,
  UPDATE_USER_DETAILS_SUCCESS,
  UPDATE_USER_DETAILS_FAILURE,
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
} from "../actions/ActionConstant";

const initialState = {
  profile: {
    data: {},
    loading: true,
    error: false,
  },
  profileInputData: {
    data: {},
    loading: true,
    error: false,
  },
  buttonDisable: false,
  loadingButtonContent: null,
  loginInputData: {
    data: {},
    loading: true,
    error: false,
  },
  registerInputData: {
    data: {},
    loading: true,
    error: false,
  },
  forgotPasswordInputData: {
    data: {},
    loading: true,
    error: false,
  },
  deleteAccount: {
    data: {},
    loading: true,
    error: false,
  },
  dashboard: {
    data: {},
    loading: true,
    error: false,
    chartData: {},
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DETAILS_START:
      return {
        ...state,
        profile: {
          data: {},
          loading: true,
          error: false,
        },
      };
    case FETCH_USER_DETAILS_SUCCESS:
      return {
        ...state,
        profile: {
          data: action.data.data,
          loading: false,
          error: false,
        },
      };
    case FETCH_USER_DETAILS_FAILURE:
      return {
        ...state,
        profile: {
          data: {},
          loading: false,
          error: action.error,
        },
      };
    case EDIT_USER_DETAILS:
      return {
        ...state,
        profile: {
          loading: false,
          error: false,
          data: {
            ...state.profile.data,
            [action.name]: action.value,
          },
        },
      };
    case UPDATE_USER_DETAILS_START:
      return {
        ...state,
        profileInputData: {
          data: {
            name: state.profile.data.name,
            email: state.profile.data.email,
            about: state.profile.data.about,
            mobile:
              state.profile.data.mobile != null
                ? state.profile.data.mobile
                : "",
            address: state.profile.data.address,
            about: state.profile.data.about,
            picture: action.data.picture == "" ? "" : action.data.picture,
            cover: action.data.cover == "" ? "" : action.data.cover,
          },
        },
        buttonDisable: true,
        loadingButtonContent: "Loading please wait",
      };

    case UPDATE_USER_DETAILS_SUCCESS:
      return {
        ...state,
        profile: {
          data: action.data.data,
        },
        buttonDisable: false,
        loadingButtonContent: null,
      };
    case UPDATE_USER_DETAILS_FAILURE:
      return {
        ...state,
        profile: {
          data: state.profile.data,
          loading: false,
          error: action.error,
        },
        buttonDisable: false,
        loadingButtonContent: null,
      };

    case GET_LOGIN_DETAILS:
      return {
        ...state,
        loginInputData: {
          loading: false,
          error: false,
          data: {
            ...state.loginInputData.data,
            [action.name]: action.value,
          },
        },
      };
    case LOGIN_START:
      return {
        ...state,
        loginInputData: {
          data: action.data,
        },
        buttonDisable: true,
        loadingButtonContent: "Loading please wait",
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        profile: {
          data: action.data.data,
        },
        buttonDisable: false,
        loadingButtonContent: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        profile: {
          data: {},
          loading: false,
          error: action.error,
        },
        buttonDisable: false,
        loadingButtonContent: null,
      };
    case GET_REGISTER_DETAILS:
      return {
        ...state,
        registerInputData: {
          loading: false,
          error: false,
          data: {
            ...state.registerInputData.data,
            [action.name]: action.value,
          },
        },
      };
    case REGISTER_START:
      return {
        ...state,
        registerInputData: {
          data: action.data,
        },
        buttonDisable: true,
        loadingButtonContent: "Loading please wait",
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        profile: {
          data: action.data.data,
        },
        buttonDisable: false,
        loadingButtonContent: null,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        profile: {
          data: {},
          loading: false,
          error: action.error,
        },
        buttonDisable: false,
        loadingButtonContent: null,
      };
    case GET_FORGOT_PASSWORD_DETAILS:
      return {
        ...state,
        forgotPasswordInputData: {
          loading: false,
          error: false,
          data: {
            ...state.forgotPasswordInputData.data,
            [action.name]: action.value,
          },
        },
      };
    case FORGOT_PASSWORD_START:
      return {
        ...state,
        forgotPasswordInputData: {
          data: action.data,
        },
        buttonDisable: true,
        loadingButtonContent: "Loading please wait",
      };

    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        buttonDisable: false,
        loadingButtonContent: null,
      };
    case FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        buttonDisable: false,
        loadingButtonContent: null,
      };
    case DELETE_ACCOUNT_START:
      return {
        ...state,
        deleteAccount: {
          data: action.data,
        },
        buttonDisable: true,
        loadingButtonContent: "Loading please wait",
      };
    case DELETE_ACCOUNT_SUCCESS:
      return {
        ...state,
        buttonDisable: false,
        loadingButtonContent: null,
      };
    case DELETE_ACCOUNT_FAILURE:
      return {
        ...state,
        buttonDisable: false,
        loadingButtonContent: null,
      };

    case FETCH_DASHBOARD_START:
      return {
        ...state,
        dashboard: {
          data: {},
          loading: true,
          error: false,
          chartData: {},
        },
      };
    case FETCH_DASHBOARD_SUCCESS:
      return {
        ...state,
        dashboard: {
          data: action.data,
          loading: false,
          error: false,
          chartData: [
            ["x", "meetings"],
            ...action.data.last_x_days_meetings_website,
          ],
        },
      };
    case FETCH_DASHBOARD_FAILURE:
      return {
        ...state,
        dashboard: {
          data: {},
          loading: false,
          error: action.error,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
