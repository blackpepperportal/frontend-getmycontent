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
  REGISTER_VERIFY_START,
  REGISTER_VERIFY_SUCCESS,
  REGISTER_VERIFY_FAILURE,
  REGISTER_VERIFY_RESEND_START,
  REGISTER_VERIFY_RESEND_SUCCESS,
  REGISTER_VERIFY_RESEND_FAILURE,
  NOTIFICATION_STATUS_UPDATE_START,
  NOTIFICATION_STATUS_UPDATE_SUCCESS,
  NOTIFICATION_STATUS_UPDATE_FAILURE,
  GET_FORGOT_PASSWORD_DETAILS,
  FETCH_PAYMENTS_START,
  FETCH_PAYMENTS_SUCCESS,
  FETCH_PAYMENTS_FAILURE,
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
    buttonDisable: false,
    loadingButtonContent: null,
  },
  registerInputData: {
    data: {},
    loading: true,
    error: false,
    buttonDisable: false,
    loadingButtonContent: null,
  },
  forgotPasswordInputData: {
    data: {},
    loading: true,
    error: false,
    buttonDisable: false,
    loadingButtonContent: null,
  },
  deleteAccount: {
    data: {},
    loading: true,
    error: false,
    inputData: {},
    buttonDisable: false,
    loadingButtonContent: null,
  },
  registerVerify: {
    data: {},
    loading: true,
    error: false,
    buttonDisable: false,
    buttonLoadingContent: null,
    inputData: {},
  },
  registerVerifyResend: {
    data: {},
    loading: true,
    error: false,
    buttonDisable: false,
    buttonLoadingContent: null,
    inputData: {},
  },
  notificationUpdate: {
    data: {},
    loading: true,
    error: false,
    inputData: {},
  },
  payments: {
    data: {},
    loading: true,
    error: false,
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
          loading: true,
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
      console.log("profile data ", state.profile.data);
      return {
        ...state,
        profileInputData: {
          data: {
            first_name: state.profile.data.first_name,
            last_name: state.profile.data.last_name,
            email: state.profile.data.email,
            description: state.profile.data.description,
            mobile:
              state.profile.data.mobile != null
                ? state.profile.data.mobile
                : "",
            address: state.profile.data.address,
            picture: action.data ? action.data : "",
            cover: action.data ? action.data : "",
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
          data: {
            ...action.data,
            time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          },
          buttonDisable: true,
          loadingButtonContent: "Loading please wait",
        },
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        profile: {
          data: action.data.data,
          loading: false,
          error: false,
        },
        loginInputData: {
          data: {},
          loading: true,
          error: false,
          buttonDisable: false,
          loadingButtonContent: null,
        },
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loginInputData: {
          data: {},
          loading: true,
          error: false,
          buttonDisable: false,
          loadingButtonContent: null,
        },
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
          data: {
            ...action.data,
            time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          },
          loading: true,
          error: false,
          buttonDisable: true,
          loadingButtonContent: "Loading please wait",
        },
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        profile: {
          data: action.data.data,
        },
        registerInputData: {
          data: {},
          loading: false,
          error: false,
          buttonDisable: false,
          loadingButtonContent: null,
        },
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        registerInputData: {
          data: {},
          loading: false,
          error: action.data,
          buttonDisable: false,
          loadingButtonContent: null,
        },
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
          loading: false,
          error: false,
          buttonDisable: true,
          loadingButtonContent: "Loading please wait",
        },
      };

    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotPasswordInputData: {
          data: {},
          loading: true,
          error: false,
          buttonDisable: false,
          loadingButtonContent: null,
        },
      };
    case FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        forgotPasswordInputData: {
          data: {},
          loading: true,
          error: action.data,
          buttonDisable: false,
          loadingButtonContent: null,
        },
      };
    case DELETE_ACCOUNT_START:
      return {
        ...state,
        deleteAccount: {
          data: {},
          loading: true,
          error: {},
          inputData: action.data,
          buttonDisable: true,
          loadingButtonContent: "Loading please wait",
        },
      };

    case DELETE_ACCOUNT_SUCCESS:
      return {
        ...state,
        deleteAccount: {
          data: action.data,
          loading: true,
          error: {},
          inputData: {},
          buttonDisable: false,
          loadingButtonContent: null,
        },
      };
    case DELETE_ACCOUNT_FAILURE:
      return {
        ...state,
        deleteAccount: {
          data: {},
          loading: true,
          error: action.error,
          inputData: {},
          buttonDisable: false,
          loadingButtonContent: null,
        },
      };
    case REGISTER_VERIFY_START:
      return {
        ...state,
        registerVerify: {
          inputData: action.data,
          buttonDisable: true,
          loadingButtonContent: "Loading please wait",
          data: {},
          loading: true,
        },
      };
    case REGISTER_VERIFY_SUCCESS:
      return {
        ...state,
        registerVerify: {
          inputData: {},
          buttonDisable: false,
          loadingButtonContent: null,
          data: action.data,
          loading: false,
        },
      };
    case REGISTER_VERIFY_FAILURE:
      return {
        ...state,
        registerVerify: {
          inputData: {},
          buttonDisable: false,
          loadingButtonContent: null,
          data: {},
          error: action.error,
          loading: true,
        },
      };
    case REGISTER_VERIFY_RESEND_START:
      return {
        ...state,
        registerVerifyResend: {
          inputData: action.data,
          buttonDisable: true,
          loadingButtonContent: "Loading please wait",
          data: {},
          loading: true,
        },
      };
    case REGISTER_VERIFY_RESEND_SUCCESS:
      return {
        ...state,
        registerVerifyResend: {
          inputData: {},
          buttonDisable: false,
          loadingButtonContent: null,
          data: action.data,
          loading: false,
        },
      };
    case REGISTER_VERIFY_RESEND_FAILURE:
      return {
        ...state,
        registerVerifyResend: {
          inputData: {},
          buttonDisable: false,
          loadingButtonContent: null,
          data: {},
          error: action.error,
          loading: true,
        },
      };
    case NOTIFICATION_STATUS_UPDATE_START:
      return {
        ...state,
        notificationUpdate: {
          inputData: action.data,
          data: {},
          loading: true,
        },
      };
    case NOTIFICATION_STATUS_UPDATE_SUCCESS:
      return {
        ...state,
        notificationUpdate: {
          inputData: {},
          data: action.data,
          loading: false,
          error: false,
        },
        profile: {
          data: action.data.data,
          loading: false,
          error: false,
        },
      };
    case NOTIFICATION_STATUS_UPDATE_FAILURE:
      return {
        ...state,
        notificationUpdate: {
          inputData: {},
          data: {},
          error: action.error,
          loading: true,
        },
      };
    case FETCH_PAYMENTS_START:
      return {
        ...state,
        payments: {
          data: {},
          loading: true,
          error: false,
        },
      };
    case FETCH_PAYMENTS_SUCCESS:
      return {
        ...state,
        payments: {
          data: action.data.data,
          loading: false,
          error: false,
        },
      };
    case FETCH_PAYMENTS_FAILURE:
      return {
        ...state,
        payments: {
          data: {},
          loading: true,
          error: action.error,
        },
      };

    default:
      return state;
  }
};

export default userReducer;
