import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Container, Image, Media, Button, Badge } from "react-bootstrap";
import configuration from "react-global-configuration";
import VerifiedBadgeNoShadow from "../../Handlers/VerifiedBadgeNoShadow";
// import SideBarIndex from "../SideBar/SideBarIndex";
import io from "socket.io-client";
import {
  updateNotificationCount,
} from "../../../store/actions/NotificationAction";

import { connect } from "react-redux";
let chatSocket;

const HeaderIndex = (props) => {
  const [chatCount, setChatCount] = useState(0);
  const [bellCount, setBellCount] = useState(0);
  
  useEffect(() => {
    console.log('Inside');
    let chatSocketUrl = configuration.get("configData.chat_socket_url");
    if (chatSocketUrl === "") {
      console.log('no keys configured');
    }
    if(configuration.get("configData.is_notification_count_enabled") == 1) {
      chatSocketConnect();
    }
  }, []);

  const chatSocketConnect = () => {
    // check the socket url is configured
    let chatSocketUrl = configuration.get("configData.chat_socket_url");
    if (chatSocketUrl) {
      chatSocket = io(chatSocketUrl, {
        query:
          `commonid:'user_id_` +
          localStorage.getItem("userId") +
          `',myid:` +
          localStorage.getItem("userId"),
      });
      chatSocket.emit("notification update", {
        commonid:
          "user_id_" +
          localStorage.getItem("userId"),
        myid: localStorage.getItem("userId"),
      });
      if(localStorage.getItem("socket") == "true") {
        chatSocket.on("notification", (newData) => {
          console.log(newData);
          setChatCount(newData.chat_notification);
          setBellCount(newData.bell_notification);
        });
      } else {
        console.log(false);
        chatSocket.disconnect();
      }
    }
  };

  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {localStorage.getItem("userId") ? (
        <header className="main-header">
          <Container>
            <nav className="main-header-menu">
              <Link
                to={"/home"}
                className="main-header-menu icon-with-round-hover m-current"
                onClick={() => setIsVisible(false)}
              >
                <Image
                  src={window.location.origin + "/assets/images/icons/home.svg"}
                />
              </Link>
              <Link
                to={"/notification"}
                className="main-header-menu icon-with-round-hover"
                active-className="m-current"
                exact-active-className=""
                onClick={() => setIsVisible(false)}
              >
                <Image
                  src={
                    window.location.origin +
                    "/assets/images/icons/notification.svg"
                  }
                />
                {bellCount > 0 ?
                  <Badge variant="light" className="badge-notify">{bellCount}</Badge>
                : ""}
                
              </Link>
              <Link
                to={"/posts-create"}
                className="main-header-menu icon-with-round-hover"
                onClick={() => setIsVisible(false)}
              >
                <Image
                  src={
                    window.location.origin +
                    "/assets/images/icons/create-post.svg"
                  }
                />
              </Link>
              <Link
                to={"/inbox"}
                className="main-header-menu icon-with-round-hover"
                onClick={() => setIsVisible(false)}
              >
                <Image
                  src={window.location.origin + "/assets/images/icons/chat.svg"}
                />
                {/* <span className="main-header-menu__count"> 5 </span> */}
                {chatCount > 0 ?
                  <Badge variant="light" className="badge-notify">{chatCount}</Badge>
                : ""}
              </Link>
              <Button
                type="button"
                className="main-header-menu icon-with-round-hover"
                to="#"
                data-drawer-trigger
                aria-controls="drawer-name"
                aria-expanded="false"
                onClick={() => setIsVisible(!isVisible)}
              >
                <Image
                  src={window.location.origin + "/assets/images/icons/user.svg"}
                />
              </Button>
            </nav>
          </Container>
        </header>
      ) : (
        <header className="main-header">
          <Container>
            <nav className="main-header-menu">
              <Link
                to={"/"}
                className="main-header-menu icon-with-round-hover m-current"
                onClick={() => setIsVisible(false)}
              >
                <Image
                  src={window.location.origin + "/assets/images/icons/home.svg"}
                />
              </Link>
            </nav>
          </Container>
        </header>
      )}
      {isVisible && localStorage.getItem("userId") ? (
        <div className="drawer" id="drawer-name" data-drawer-target>
          <div
            className="drawer__overlay"
            data-drawer-close
            tabindex="-1"
          ></div>
          <div className="drawer__wrapper">
            <div className="drawer__header">
              <div className="drawer__title">
                <Link to="#" className="l-sidebar__avatar" data-name="Profile">
                  <span className="sidebar-hamburger-user-profile">
                    <Image
                      src={localStorage.getItem("user_picture")}
                      alt={configuration.get("configData.site_name")}
                    />
                  </span>
                  <span onClick={() => setIsVisible(!isVisible)}>
                    {" "}
                    <i className="material-icons add-icon">clear</i>
                  </span>
                </Link>
                <div className="pull-left side-user-head">
                  <Link
                    to={"/profile"}
                    onClick={() => setIsVisible(!isVisible)}
                  >
                    <h3 className="g-user-name">
                      {localStorage.getItem("name")} {"  "}
                      {localStorage.getItem("is_verified_badge") == 1 ? (
                        <div className="pl-2">
                          <VerifiedBadgeNoShadow/>
                        </div>
                      ) : null}
                    </h3>
                    <span className="user-id">
                      @{localStorage.getItem("username")}
                    </span>
                  </Link>

                  <ul className="list-inline">
                    <Media as="li">
                      <Link to={"/fans"} onClick={() => setIsVisible(false)}>
                        <span className="fans-follow">
                          {localStorage.getItem("total_followers")
                            ? localStorage.getItem("total_followers")
                            : 0}
                        </span>{" "}
                        Fans
                      </Link>
                    </Media>
                    <Media as="li">
                      <Link
                        to={"/following"}
                        onClick={() => setIsVisible(false)}
                      >
                        <span className="fans-follow">
                          {localStorage.getItem("total_followings")
                            ? localStorage.getItem("total_followings")
                            : 0}
                        </span>{" "}
                        Following
                      </Link>
                    </Media>
                  </ul>
                </div>

                {/* <div className="pull-right">
                  <span className="m-arrow">
                    <Image
                      src={
                        window.location.origin +
                        "/assets/images/icons/arrow-down.svg"
                      }
                      alt={configuration.get("configData.site_name")}
                    />
                  </span>
                </div> */}
              </div>
              {/* <Button
              className="drawer__close"
              data-drawer-close
              aria-label="Close Drawer"
            ></Button> */}
            </div>
            <div className="drawer__content">
              <div className="right-sidebar-menu-item">
                <Link
                  to={"/profile"}
                  className="sidebar-menus-item"
                  data-name="Profile"
                  onClick={() => setIsVisible(!isVisible)}
                >
                  <Image
                    src={
                      window.location.origin + "/assets/images/icons/user.svg"
                    }
                    alt={configuration.get("configData.site_name")}
                  />{" "}
                  My Profile
                </Link>

                <Link
                  to={"/bookmarks"}
                  className="sidebar-menus-item"
                  data-name="Profile"
                  onClick={() => setIsVisible(!isVisible)}
                >
                  <Image
                    src={
                      window.location.origin +
                      "/assets/images/icons/bookmarks.svg"
                    }
                    alt={configuration.get("configData.site_name")}
                  />{" "}
                  Bookmarks
                </Link>

                <Link
                  to={"/list"}
                  className="sidebar-menus-item"
                  data-name="Profile"
                  onClick={() => setIsVisible(!isVisible)}
                >
                  <Image
                    src={
                      window.location.origin + "/assets/images/icons/lists.svg"
                    }
                    alt={configuration.get("configData.site_name")}
                  />{" "}
                  Lists
                </Link>

                <Link
                  to={"/edit-profile"}
                  className="sidebar-menus-item"
                  data-name="Profile"
                  onClick={() => setIsVisible(!isVisible)}
                >
                  <Image
                    src={
                      window.location.origin +
                      "/assets/images/icons/settings.svg"
                    }
                    alt={configuration.get("configData.site_name")}
                  />{" "}
                  Settings
                </Link>

                <hr className="sidebar-menu-divider" />

                <Link
                  to={"/cards"}
                  className="sidebar-menus-item"
                  data-name="Profile"
                  onClick={() => setIsVisible(!isVisible)}
                >
                  <Image
                    src={
                      window.location.origin + "/assets/images/icons/card.svg"
                    }
                    alt="Your Cards"
                  />{" "}
                  Your Cards <span className="desc">(to subscribe)</span>
                </Link>

                <Link
                  to={"/add-bank"}
                  className="sidebar-menus-item"
                  data-name="Profile"
                  onClick={() => setIsVisible(!isVisible)}
                >
                  <Image
                    src={
                      window.location.origin + "/assets/images/icons/bank.svg"
                    }
                    alt={configuration.get("configData.site_name")}
                  />{" "}
                  Add bank <span className="desc">(to earn)</span>
                </Link>
                <Link
                  to={"/wallet"}
                  className="sidebar-menus-item"
                  data-name="Wallet"
                  onClick={() => setIsVisible(!isVisible)}
                >
                  <Image
                    src={
                      window.location.origin + "/assets/images/icons/wallet.svg"
                    }
                    alt={configuration.get("configData.site_name")}
                  />{" "}
                  Wallet <span className="desc">(Your Earnings)</span>
                </Link>

                <hr className="sidebar-menu-divider" />

                <Link
                  to={`/page/help`}
                  className="sidebar-menus-item"
                  data-name="Profile"
                  onClick={() => setIsVisible(!isVisible)}
                >
                  <Image
                    src={
                      window.location.origin + "/assets/images/icons/help.svg"
                    }
                    alt={configuration.get("configData.site_name")}
                  />{" "}
                  Help and Support
                </Link>

                <Link
                  to=""
                  className="sidebar-menus-item"
                  data-name="Profile"
                  onClick={() => setIsVisible(!isVisible)}
                  style={{ display: "none" }}
                >
                  <Image
                    src={
                      window.location.origin + "/assets/images/icons/dark.svg"
                    }
                    alt={configuration.get("configData.site_name")}
                  />{" "}
                  Dark mode
                </Link>
                <hr className="sidebar-menu-divider" />
                <Link
                  to={"/logout"}
                  className="sidebar-menus-item"
                  data-name="Profile"
                  onClick={() => setIsVisible(!isVisible)}
                >
                  <Image
                    src={
                      window.location.origin + "/assets/images/icons/logout.svg"
                    }
                    alt={configuration.get("configData.site_name")}
                  />{" "}
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

const mapStateToPros = (state) => ({
  notifications: state.notification.notifications,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(HeaderIndex);
