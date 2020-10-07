import React, { useState } from "react";
import { Link } from "react-router-dom";
import configuration from "react-global-configuration";
import SideBarIndex from "../SideBar/SideBarIndex";

import { connect } from "react-redux";
import { startMeetingStart } from "../../../store/actions/MeetingAction";

const HeaderIndex = (props) => {
  const [mobileSidebar, setMobileSidebar] = useState(true);

  const startMeeting = (event) => {
    event.preventDefault();
    props.dispatch(startMeetingStart());
  };

  return (
    <div className="main-header">
      <div className="logo">
        <img src={configuration.get("configData.site_icon")} alt="" />
      </div>
      <div
        className="menu-toggle"
        onClick={() => setMobileSidebar(!mobileSidebar)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div
        style={{
          display: mobileSidebar ? "block" : "none",
        }}
      >
        <SideBarIndex toggleClass={mobileSidebar} />
      </div>
      <div style={{ margin: "auto" }}></div>
      <div className="header-part-right">
        <div>
          <button
            disabled={props.startMeeting.buttonDisable}
            className="btn btn-outline-primary btn-rounded btn-lg"
            onClick={startMeeting}
          >
            {props.startMeeting.loadingButtonContent != null
              ? props.startMeeting.loadingButtonContent
              : "Start Meeting"}
          </button>
        </div>

        {/* <i
          className="i-Full-Screen header-icon d-none d-sm-inline-block"
          data-fullscreen
        ></i> */}

        <div className="dropdown">
          <div className="user col align-self-end">
            <img
              src={localStorage.getItem("user_picture")}
              id="userDropdown"
              alt=""
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            />
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="userDropdown"
            >
              <div className="dropdown-header">
                <i className="i-Lock-User mr-1"></i>{" "}
                {localStorage.getItem("username")}
              </div>
              <Link to={"/profile"} className="dropdown-item">
                Account settings
              </Link>
              <Link to={"/my-subscriptions"} className="dropdown-item">
                Billing history
              </Link>
              <Link to={"/logout"} className="dropdown-item" href="#">
                Sign out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToPros = (state) => ({
  startMeeting: state.meeting.startMeeting,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(HeaderIndex);
