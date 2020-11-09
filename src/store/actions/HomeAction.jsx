import {
  FETCH_HOME_POSTS_START,
  FETCH_HOME_POSTS_SUCCESS,
  FETCH_HOME_POSTS_FAILURE,
  SEARCH_POST_START,
  SEARCH_POST_SUCCESS,
  SEARCH_POST_FAILURE,
  FETCH_OTHERS_SINGLE_POST_START,
  FETCH_OTHERS_SINGLE_POST_SUCCESS,
  FETCH_OTHERS_SINGLE_POST_FAILURE,
  FETCH_POST_SUGGESTION_START,
  FETCH_POST_SUGGESTION_SUCCESS,
  FETCH_POST_SUGGESTION_FAILURE,
  POST_PAYMENT_STRIPE_START,
  POST_PAYMENT_STRIPE_SUCCESS,
  POST_PAYMENT_STRIPE_FAILURE,
  POST_PAYMENT_WALLET_START,
  POST_PAYMENT_WALLET_SUCCESS,
  POST_PAYMENT_WALLET_FAILURE,
  FETCH_LISTS_DETAILS_START,
  FETCH_LISTS_DETAILS_SUCCESS,
  FETCH_LISTS_DETAILS_FAILURE,
} from "./ActionConstant";

export function fetchHomePostsStart(data) {
  return {
    type: FETCH_HOME_POSTS_START,
    data,
  };
}

export function fetchHomePostsSuccess(data) {
  return {
    type: FETCH_HOME_POSTS_SUCCESS,
    data,
  };
}

export function fetchHomePostsFailure(error) {
  return {
    type: FETCH_HOME_POSTS_FAILURE,
    error,
  };
}
export function searchPostStart(data) {
  return {
    type: SEARCH_POST_START,
    data,
  };
}

export function searchPostSuccess(data) {
  return {
    type: SEARCH_POST_SUCCESS,
    data,
  };
}

export function searchPostFailure(error) {
  return {
    type: SEARCH_POST_FAILURE,
    error,
  };
}

export function fetchOtherSinglePostStart(data) {
  return {
    type: FETCH_OTHERS_SINGLE_POST_START,
    data,
  };
}

export function fetchOtherSinglePostSuccess(data) {
  return {
    type: FETCH_OTHERS_SINGLE_POST_SUCCESS,
    data,
  };
}

export function fetchOtherSinglePostFailure(error) {
  return {
    type: FETCH_OTHERS_SINGLE_POST_FAILURE,
    error,
  };
}

export function fetchPostSuggesstionStart(data) {
  return {
    type: FETCH_POST_SUGGESTION_START,
    data,
  };
}

export function fetchPostSuggesstionSuccess(data) {
  return {
    type: FETCH_POST_SUGGESTION_SUCCESS,
    data,
  };
}

export function fetchPostSuggesstionFailure(error) {
  return {
    type: FETCH_POST_SUGGESTION_FAILURE,
    error,
  };
}

export function postPaymentStripeStart(data) {
  return {
    type: POST_PAYMENT_STRIPE_START,
    data,
  };
}

export function postPaymentStripeSuccess(data) {
  return {
    type: POST_PAYMENT_STRIPE_SUCCESS,
    data,
  };
}

export function postPaymentStripeFailure(error) {
  return {
    type: POST_PAYMENT_STRIPE_FAILURE,
    error,
  };
}

export function postPaymentWalletStart(data) {
  return {
    type: POST_PAYMENT_WALLET_START,
    data,
  };
}

export function postPaymentWalletSuccess(data) {
  return {
    type: POST_PAYMENT_WALLET_SUCCESS,
    data,
  };
}

export function postPaymentWalletFailure(error) {
  return {
    type: POST_PAYMENT_WALLET_FAILURE,
    error,
  };
}

export function fetchListsDetailsStart(data) {
  return {
    type: FETCH_LISTS_DETAILS_START,
    data,
  };
}

export function fetchListsDetailsSuccess(data) {
  return {
    type: FETCH_LISTS_DETAILS_SUCCESS,
    data,
  };
}

export function fetchListsDetailsFailure(error) {
  return {
    type: FETCH_LISTS_DETAILS_FAILURE,
    error,
  };
}
