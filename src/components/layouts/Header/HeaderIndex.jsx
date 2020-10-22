import React, { useState } from "react";
import { Link } from "react-router-dom";
import configuration from "react-global-configuration";
import SideBarIndex from "../SideBar/SideBarIndex";

import { connect } from "react-redux";

const HeaderIndex = (props) => {
  const [mobileSidebar, setMobileSidebar] = useState(true);

  const startMeeting = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <header className="main-header">
        <div className="container">
          <nav className="main-header-menu">
            <a
              href="home.php"
              className="main-header-menu icon-with-round-hover m-current"
            >
              <img src="assets/images/icons/home.svg" />
            </a>
            <a
              href="notifications.php"
              className="main-header-menu icon-with-round-hover"
              active-className="m-current"
              exact-active-className=""
            >
              <img src="assets/images/icons/notification.svg" />
            </a>
            <a
              href="create-post.php"
              className="main-header-menu icon-with-round-hover"
            >
              <img src="assets/images/icons/create-post.svg" />
            </a>
            <a
              href="chat.php"
              className="main-header-menu icon-with-round-hover"
            >
              <img src="assets/images/icons/chat.svg" />
              <span className="main-header-menu__count"> 5 </span>
            </a>
            <button
              type="button"
              className="main-header-menu icon-with-round-hover"
              href="#"
              data-drawer-trigger
              aria-controls="drawer-name"
              aria-expanded="false"
            >
              <img src="assets/images/icons/user.svg" />
            </button>
          </nav>
        </div>
      </header>

      <section className="drawer" id="drawer-name" data-drawer-target>
        <div className="drawer__overlay" data-drawer-close tabindex="-1"></div>
        <div className="drawer__wrapper">
          <div className="drawer__header">
            <div className="drawer__title">
              <a href="#" className="l-sidebar__avatar" data-name="Profile">
                <span className="sidebar-hamburger-user-profile">
                  <img src="assets/images/avatar/b-1.jpg" alt="fansclub" />
                </span>
              </a>
              <div className="pull-left side-user-head">
                <a href="my-profile.php">
                  <h3 className="g-user-name">John</h3>
                  <span className="user-id">@johnpaul</span>
                </a>

                <ul className="list-inline">
                  <li>
                    <a href="following.php">
                      <span className="fans-follow">0</span> Fans
                    </a>
                  </li>
                  <li>
                    <a href="following.php">
                      <span className="fans-follow">5</span> Following
                    </a>
                  </li>
                </ul>
              </div>

              <div className="pull-right">
                <span className="m-arrow">
                  <img
                    src="assets/images/icons/arrow-down.svg"
                    alt="fansclub"
                  />
                </span>
              </div>
            </div>
            <button
              className="drawer__close"
              data-drawer-close
              aria-label="Close Drawer"
            ></button>
          </div>
          <div className="drawer__content">
            <div className="right-sidebar-menu-item">
              <a href="" className="sidebar-menus-item" data-name="Profile">
                <img src="assets/images/icons/arrow-down.svg" alt="fansclub" />{" "}
                My Profile
              </a>

              <a href="" className="sidebar-menus-item" data-name="Profile">
                <img src="assets/images/icons/bookmarks.svg" alt="fansclub" />{" "}
                Bookmarks
              </a>

              <a href="" className="sidebar-menus-item" data-name="Profile">
                <img src="assets/images/icons/lists.svg" alt="fansclub" /> Lists
              </a>

              <a href="" className="sidebar-menus-item" data-name="Profile">
                <img src="assets/images/icons/settings.svg" alt="AJ" /> Settings
              </a>

              <hr className="sidebar-menu-divider" />

              <a href="" className="sidebar-menus-item" data-name="Profile">
                <img src="assets/images/icons/card.svg" alt="fansclub" /> Your
                Cards
              </a>

              <a href="" className="sidebar-menus-item" data-name="Profile">
                <img src="assets/images/icons/bank.svg" alt="fansclub" /> Add
                bank
              </a>

              <hr className="sidebar-menu-divider" />

              <a href="" className="sidebar-menus-item" data-name="Profile">
                <img src="assets/images/icons/help.svg" alt="fansclub" /> Help
                and Support
              </a>

              <a href="" className="sidebar-menus-item" data-name="Profile">
                <img src="assets/images/icons/dark.svg" alt="fansclub" /> Dark
                mode
              </a>
              <a href="" className="sidebar-menus-item" data-name="Profile">
                <img src="assets/images/icons/globe.svg" alt="fansclub" />{" "}
                English
              </a>
              <a href="" className="sidebar-menus-item" data-name="Profile">
                <img src="assets/images/icons/logout.svg" alt="fansclub" />{" "}
                Logout
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(null, mapDispatchToProps)(HeaderIndex);
