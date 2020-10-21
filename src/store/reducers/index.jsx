import { combineReducers } from "redux";

import UserReducer from "./UserReducer";
import ChangePasswordReducer from "./ChangePasswordReducer";
import notifyReducer from "react-redux-notify";
import SubscriptionReducer from "./SubscriptionReducer";
import CardsReducer from "./CardsReducer";
import BankAccountReducer from "./BankAccountReducer";
import KycDocumentReducer from "./KycDocumentReducer";
import WalletReducer from "./WalletReducer";
import TransactionReducer from "./TransactionReducer";
import WithDrawReducer from "./WithDrawReducer";
import PageReducer from "./PageReducer";
import ErrorReducer from "./ErrorReducer";
import ProductOwnerReducer from "./ProductOwnerReducer";
import PostReducer from "./PostReducer";
import FollowReducer from "./FollowReducer";

export default combineReducers({
  users: UserReducer,
  changePassword: ChangePasswordReducer,
  notifications: notifyReducer,
  subscriptions: SubscriptionReducer,
  cards: CardsReducer,
  bankAccount: BankAccountReducer,
  kycDocument: KycDocumentReducer,
  wallet: WalletReducer,
  transaction: TransactionReducer,
  withDraw: WithDrawReducer,
  page: PageReducer,
  errorDetails: ErrorReducer,
  proOwner: ProductOwnerReducer,
  post: PostReducer,
  follow: FollowReducer,
});
