import React, { Component } from "react";
import AuthHeader from "./Header/AuthHeader";
import { Notify } from "react-redux-notify";
import AuthFooter from "./Footer/AuthFooter";

class AuthLayout extends Component {
  state = {};
  render() {
    return (
      <body>
        <Notify position="TopRight" />
        <AuthHeader />
        <div className="landing-main-wrapper">
          {React.cloneElement(this.props.children)}
        </div>
        <AuthFooter />
      </body>
    );
  }
}

export default AuthLayout;
