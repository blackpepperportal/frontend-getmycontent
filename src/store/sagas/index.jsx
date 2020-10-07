import { all, fork } from "redux-saga/effects";

import UserSaga from "./UserSaga";
import ChangePasswordSaga from "./ChangePasswordSaga";
import MeetingSaga from "./MeetingSaga";
import SubscriptionSaga from "./SubscriptionSaga";
import CardsSaga from "./CardsSaga";
import ErrorSaga from "./ErrorSaga";
import RecordingSaga from "./RecordingSaga";
import PageSaga from "./PageSaga";

export default function* rootSaga() {
  yield all([fork(UserSaga)]);
  yield all([fork(ChangePasswordSaga)]);
  yield all([fork(MeetingSaga)]);
  yield all([fork(SubscriptionSaga)]);
  yield all([fork(CardsSaga)]);
  yield all([fork(ErrorSaga)]);
  yield all([fork(PageSaga)]);
  yield all([fork(RecordingSaga)]);
}
