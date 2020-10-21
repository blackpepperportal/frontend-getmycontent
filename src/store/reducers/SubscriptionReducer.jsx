import {
  FETCH_SUBSCRIPTION_START,
  FETCH_SUBSCRIPTION_SUCCESS,
  FETCH_SUBSCRIPTION_FAILURE,
  FETCH_MY_SUBSCRIPTION_START,
  FETCH_MY_SUBSCRIPTION_SUCCESS,
  FETCH_MY_SUBSCRIPTION_FAILURE,
  FETCH_SINGLE_SUBSCRIPTION_START,
  FETCH_SINGLE_SUBSCRIPTION_SUCCESS,
  FETCH_SINGLE_SUBSCRIPTION_FAILURE,
  SUBSCRIPTION_PAYMENT_START,
  SUBSCRIPTION_PAYMENT_SUCCESS,
  SUBSCRIPTION_PAYMENT_FAILURE,
  SUBSCRIPTION_AUTO_RENEWAL_START,
  SUBSCRIPTION_AUTO_RENEWAL_SUCCESS,
  SUBSCRIPTION_AUTO_RENEWAL_FAILURE,
} from "../actions/ActionConstant";

const initialState = {
  subscription: {
    data: {},
    loading: true,
    error: false,
  },
  mySubscription: {
    data: {},
    loading: true,
    error: false,
  },
  singleSubscription: {
    data: {},
    loading: true,
    error: false,
  },
  subscriptionPayment: {
    inputData: {},
    loading: true,
    error: false,
    success: {},
    buttonDisable: false,
    loadingButtonContent: null,
  },
  subscriptionRenew: {
    inputData: {},
    loading: true,
    error: false,
    success: {},
    buttonDisable: false,
    loadingButtonContent: null,
  },
};

const SubscriptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUBSCRIPTION_START:
      return {
        ...state,
        subscription: {
          data: {},
          loading: true,
          error: false,
        },
      };
    case FETCH_SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        subscription: {
          data: action.data,
          loading: false,
          error: false,
        },
      };
    case FETCH_SUBSCRIPTION_FAILURE:
      return {
        ...state,
        subscription: {
          data: {},
          loading: true,
          error: action.error,
        },
      };
    case FETCH_MY_SUBSCRIPTION_START:
      return {
        ...state,
        mySubscription: {
          data: {},
          loading: true,
          error: false,
        },
      };
    case FETCH_MY_SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        mySubscription: {
          data: action.data,
          loading: false,
          error: false,
        },
      };
    case FETCH_MY_SUBSCRIPTION_FAILURE:
      return {
        ...state,
        mySubscription: {
          data: {},
          loading: true,
          error: action.error,
        },
      };
    case FETCH_SINGLE_SUBSCRIPTION_START:
      return {
        ...state,
        singleSubscription: {
          data: {},
          loading: true,
          error: false,
        },
        singleSubInputData: {
          data: action.data,
        },
      };
    case FETCH_SINGLE_SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        singleSubscription: {
          data: action.data,
          loading: false,
          error: false,
        },
      };
    case FETCH_SINGLE_SUBSCRIPTION_FAILURE:
      return {
        ...state,
        singleSubscription: {
          data: {},
          loading: true,
          error: action.error,
        },
      };
    case SUBSCRIPTION_PAYMENT_START:
      return {
        ...state,
        subscriptionPayment: {
          inputData: action.data,
          loading: true,
          error: false,
          success: {},
          buttonDisable: true,
          loadingButtonContent: "Processing.. Please wait...",
        },
      };
    case SUBSCRIPTION_PAYMENT_SUCCESS:
      return {
        ...state,
        subscriptionPayment: {
          loading: false,
          error: false,
          success: action.data,
          buttonDisable: false,
          loadingButtonContent: null,
        },
      };
    case SUBSCRIPTION_PAYMENT_FAILURE:
      return {
        ...state,
        subscriptionPayment: {
          loading: true,
          error: action.error,
          success: {},
          buttonDisable: false,
          loadingButtonContent: null,
        },
      };
    case SUBSCRIPTION_AUTO_RENEWAL_START:
      return {
        ...state,
        subscriptionRenew: {
          inputData: action.data,
          loading: true,
          error: false,
          success: {},
          buttonDisable: true,
          loadingButtonContent: "Processing.. Please wait...",
        },
      };
    case SUBSCRIPTION_AUTO_RENEWAL_SUCCESS:
      return {
        ...state,
        subscriptionRenew: {
          loading: false,
          error: false,
          success: action.data,
          buttonDisable: false,
          loadingButtonContent: null,
        },
      };
    case SUBSCRIPTION_AUTO_RENEWAL_FAILURE:
      return {
        ...state,
        subscriptionRenew: {
          loading: true,
          error: action.error,
          success: {},
          buttonDisable: false,
          loadingButtonContent: null,
        },
      };
    default:
      return state;
  }
};

export default SubscriptionReducer;
