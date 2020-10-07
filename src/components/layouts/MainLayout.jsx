import React, { Component } from "react";
import HeaderIndex from "./Header/HeaderIndex";
// import SideBarIndex from "./SideBar/SideBarIndex";
// import FooterIndex from "./Footer/FooterIndex";
import { Notify } from "react-redux-notify";

class MainLayout extends Component {
  state = {};
  render() {
    return (
      <div className="app-admin-wrap layout-sidebar-large">
        <Notify position="TopRight" />
        <HeaderIndex />
        {/* <SideBarIndex /> */}
        <div className="main-content-wrap sidenav-open d-flex flex-column">
          <div className="main-wrap-sec">
            {React.cloneElement(this.props.children)}
          </div>
          {/* <FooterIndex /> */}
        </div>
      </div>
    );
  }
}

export default MainLayout;
