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
    <>
      <header class="main-header">
        <div class="container">
          <nav class="main-header-menu">
            <a
              href="home.php"
              class="main-header-menu icon-with-round-hover m-current"
            >
              <img src="assets/images/icons/home.svg" />
            </a>
            <a
              href="notifications.php"
              class="main-header-menu icon-with-round-hover"
              active-class="m-current"
              exact-active-class=""
            >
              <img src="assets/images/icons/notification.svg" />
            </a>
            <a
              href="create-post.php"
              class="main-header-menu icon-with-round-hover"
            >
              <img src="assets/images/icons/create-post.svg" />
            </a>
            <a href="chat.php" class="main-header-menu icon-with-round-hover">
              <img src="assets/images/icons/chat.svg" />
              <span class="main-header-menu__count"> 5 </span>
            </a>
            <button
              type="button"
              class="main-header-menu icon-with-round-hover"
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

      <section class="drawer" id="drawer-name" data-drawer-target>
        <div class="drawer__overlay" data-drawer-close tabindex="-1"></div>
        <div class="drawer__wrapper">
          <div class="drawer__header">
            <div class="drawer__title">
              <a href="#" class="l-sidebar__avatar" data-name="Profile">
                <span class="sidebar-hamburger-user-profile">
                  <img src="assets/images/avatar/b-1.jpg" alt="fansclub" />
                </span>
              </a>
              <div class="pull-left side-user-head">
                <a href="my-profile.php">
                  <h3 class="g-user-name">John</h3>
                  <span class="user-id">@johnpaul</span>
                </a>

                <ul class="list-inline">
                  <li>
                    <a href="following.php">
                      <span class="fans-follow">0</span> Fans
                    </a>
                  </li>
                  <li>
                    <a href="following.php">
                      <span class="fans-follow">5</span> Following
                    </a>
                  </li>
                </ul>
              </div>

              <div class="pull-right">
                <span class="m-arrow">
                  <img
                    src="assets/images/icons/arrow-down.svg"
                    alt="fansclub"
                  />
                </span>
              </div>
            </div>
            <button
              class="drawer__close"
              data-drawer-close
              aria-label="Close Drawer"
            ></button>
          </div>
          <div class="drawer__content">
            <div class="right-sidebar-menu-item">
              <a href="" class="sidebar-menus-item" data-name="Profile">
                <img src="assets/images/icons/arrow-down.svg" alt="fansclub" />{" "}
                My Profile
              </a>

              <a href="" class="sidebar-menus-item" data-name="Profile">
                <img src="assets/images/icons/bookmarks.svg" alt="fansclub" />{" "}
                Bookmarks
              </a>

              <a href="" class="sidebar-menus-item" data-name="Profile">
                <img src="assets/images/icons/lists.svg" alt="fansclub" /> Lists
              </a>

              <a href="" class="sidebar-menus-item" data-name="Profile">
                <img src="assets/images/icons/settings.svg" alt="AJ" /> Settings
              </a>

              <hr class="sidebar-menu-divider" />

              <a href="" class="sidebar-menus-item" data-name="Profile">
                <img src="assets/images/icons/card.svg" alt="fansclub" /> Your
                Cards
              </a>

              <a href="" class="sidebar-menus-item" data-name="Profile">
                <img src="assets/images/icons/bank.svg" alt="fansclub" /> Add
                bank
              </a>

              <hr class="sidebar-menu-divider" />

              <a href="" class="sidebar-menus-item" data-name="Profile">
                <img src="assets/images/icons/help.svg" alt="fansclub" /> Help
                and Support
              </a>

              <a href="" class="sidebar-menus-item" data-name="Profile">
                <img src="assets/images/icons/dark.svg" alt="fansclub" /> Dark
                mode
              </a>
              <a href="" class="sidebar-menus-item" data-name="Profile">
                <img src="assets/images/icons/globe.svg" alt="fansclub" />{" "}
                English
              </a>
              <a href="" class="sidebar-menus-item" data-name="Profile">
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

const mapStateToPros = (state) => ({
  startMeeting: state.meeting.startMeeting,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(HeaderIndex);
