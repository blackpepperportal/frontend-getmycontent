import { all, fork } from "redux-saga/effects";

import UserSaga from "./UserSaga";
import ChangePasswordSaga from "./ChangePasswordSaga";
import SubscriptionSaga from "./SubscriptionSaga";
import CardsSaga from "./CardsSaga";
import BankAccountSaga from "./BankAccountSaga";
import KycDocumentSaga from "./KycDocumentSaga";
import WalletSaga from "./WalletSaga";
import TransactionSaga from "./TransactionSaga";
import WithDrawSaga from "./WithDrawSaga";
import PageSaga from "./PageSaga";
import PostSaga from "./PostSaga";
import ErrorSaga from "./ErrorSaga";
import FollowSaga from "./FollowSaga";
import VerificationDocumentSaga from "./VerificationDocumentSaga";
import CommentsSaga from "./CommentsSaga";
import FavSaga from "./FavSaga";
import BookmarkSaga from "./BookmarkSaga";
import SendTipSaga from "./SendTipSaga";
import HomeSaga from "./HomeSaga";

export default function* rootSaga() {
  yield all([fork(UserSaga)]);
  yield all([fork(ChangePasswordSaga)]);
  yield all([fork(SubscriptionSaga)]);
  yield all([fork(CardsSaga)]);
  yield all([fork(BankAccountSaga)]);
  yield all([fork(KycDocumentSaga)]);
  yield all([fork(WalletSaga)]);
  yield all([fork(TransactionSaga)]);
  yield all([fork(WithDrawSaga)]);
  yield all([fork(ErrorSaga)]);
  yield all([fork(PageSaga)]);
  yield all([fork(PostSaga)]);
  yield all([fork(FollowSaga)]);
  yield all([fork(VerificationDocumentSaga)]);
  yield all([fork(CommentsSaga)]);
  yield all([fork(FavSaga)]);
  yield all([fork(BookmarkSaga)]);
  yield all([fork(SendTipSaga)]);
  yield all([fork(HomeSaga)]);
}
