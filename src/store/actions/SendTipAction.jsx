import {
  SEND_TIP_BY_STRIPE_START,
  SEND_TIP_BY_STRIPE_SUCCESS,
  SEND_TIP_BY_STRIPE_FAILURE,
  SEND_TIP_BY_WALLET_START,
  SEND_TIP_BY_WALLET_SUCCESS,
  SEND_TIP_BY_WALLET_FAILURE,
} from "./ActionConstant";

export function sendTipStripeStart(data) {
  return {
    type: SEND_TIP_BY_STRIPE_START,
    data,
  };
}

export function sendTipStripeSuccess(data) {
  return {
    type: SEND_TIP_BY_STRIPE_SUCCESS,
    data,
  };
}

export function sendTipStripeFailure(error) {
  return {
    type: SEND_TIP_BY_STRIPE_FAILURE,
    error,
  };
}

export function sendTipWalletStart(data) {
  return {
    type: SEND_TIP_BY_WALLET_START,
    data,
  };
}

export function sendTipWalletSuccess(data) {
  return {
    type: SEND_TIP_BY_WALLET_SUCCESS,
    data,
  };
}

export function sendTipWalletFailure(error) {
  return {
    type: SEND_TIP_BY_WALLET_FAILURE,
    error,
  };
}
