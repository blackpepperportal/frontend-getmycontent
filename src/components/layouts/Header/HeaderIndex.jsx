import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Container, Image, Media, Button} from "react-bootstrap";
// import configuration from "react-global-configuration";
// import SideBarIndex from "../SideBar/SideBarIndex";

import { connect } from "react-redux";

const HeaderIndex = (props) => {
  // const [mobileSidebar, setMobileSidebar] = useState(true);

  // const startMeeting = (event) => {
  //   event.preventDefault();
  // };

  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <header className="main-header">
        <Container>
          <nav className="main-header-menu">
            <Link
              to={"/home"}
              className="main-header-menu icon-with-round-hover m-current"
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
            >
              <Image
                src={
                  window.location.origin +
                  "/assets/images/icons/notification.svg"
                }
              />
            </Link>
            <Link
              to={"/create-post"}
              className="main-header-menu icon-with-round-hover"
            >
              <Image
                src={
                  window.location.origin +
                  "/assets/images/icons/create-post.svg"
                }
              />
            </Link>
            <Link
              to={"/messages"}
              className="main-header-menu icon-with-round-hover"
            >
              <Image
                src={window.location.origin + "/assets/images/icons/chat.svg"}
              />
              <span className="main-header-menu__count"> 5 </span>
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
      {isVisible ? (
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
                      src={
                        window.location.origin + "/assets/images/avatar/b-1.jpg"
                      }
                      alt="fansclub"
                    />
                  </span>
                </Link>
                <div className="pull-left side-user-head">
                  <Link to={"/profile"}>
                    <h3 className="g-user-name">John</h3>
                    <span className="user-id">@johnpaul</span>
                  </Link>

                  <ul className="list-inline">
                    <Media as="li">
                      <Link to={"/following"}>
                        <span className="fans-follow">0</span> Fans
                      </Link>
                    </Media>
                    <Media as="li">
                      <Link to={"/fans"}>
                        <span className="fans-follow">5</span> Following
                      </Link>
                    </Media>
                  </ul>
                </div>

                <div className="pull-right">
                  <span className="m-arrow">
                    <Image
                      src={
                        window.location.origin +
                        "/assets/images/icons/arrow-down.svg"
                      }
                      alt="fansclub"
                    />
                  </span>
                </div>
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
                      window.location.origin +
                      "/assets/images/icons/arrow-down.svg"
                    }
                    alt="fansclub"
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
                    alt="fansclub"
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
                    alt="fansclub"
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
                    alt="fansclub"
                  />{" "}
                  Settings
                </Link>

                <hr className="sidebar-menu-divider" />

                <Link
                  to={"/card-list"}
                  className="sidebar-menus-item"
                  data-name="Profile"
                  onClick={() => setIsVisible(!isVisible)}
                >
                  <Image
                    src={
                      window.location.origin + "/assets/images/icons/card.svg"
                    }
                    alt="fansclub"
                  />{" "}
                  Your Cards
                </Link>

                <Link
                  to={"/banking"}
                  className="sidebar-menus-item"
                  data-name="Profile"
                  onClick={() => setIsVisible(!isVisible)}
                >
                  <Image
                    src={
                      window.location.origin + "/assets/images/icons/bank.svg"
                    }
                    alt="fansclub"
                  />{" "}
                  Add bank
                </Link>

                <hr className="sidebar-menu-divider" />

                <Link
                  to=""
                  className="sidebar-menus-item"
                  data-name="Profile"
                  onClick={() => setIsVisible(!isVisible)}
                >
                  <Image
                    src={
                      window.location.origin + "/assets/images/icons/help.svg"
                    }
                    alt="fansclub"
                  />{" "}
                  Help and Support
                </Link>

                <Link
                  to=""
                  className="sidebar-menus-item"
                  data-name="Profile"
                  onClick={() => setIsVisible(!isVisible)}
                >
                  <Image
                    src={
                      window.location.origin + "/assets/images/icons/dark.svg"
                    }
                    alt="fansclub"
                  />{" "}
                  Dark mode
                </Link>

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
                    alt="fansclub"
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

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(null, mapDispatchToProps)(HeaderIndex);
