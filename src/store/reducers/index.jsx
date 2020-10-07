import { combineReducers } from "redux";

import UserReducer from "./UserReducer";
import ChangePasswordReducer from "./ChangePasswordReducer";
import MeetingReducer from "./MeetingReducer";
import notifyReducer from "react-redux-notify";
import SubscriptionReducer from "./SubscriptionReducer";
import CardsReducer from "./CardsReducer";
import CommonReducer from "./CommonReducer";
import ErrorReducer from "./ErrorReducer";
import PageReducer from "./PageReducer";
import RecordingReducer from "./RecordingReducer";

export default combineReducers({
  users: UserReducer,
  changePassword: ChangePasswordReducer,
  meeting: MeetingReducer,
  notifications: notifyReducer,
  subscriptions: SubscriptionReducer,
  cards: CardsReducer,
  common: CommonReducer,
  errorDetails: ErrorReducer,
  page: PageReducer,
  recording: RecordingReducer,
});
