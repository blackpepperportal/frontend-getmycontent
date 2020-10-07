import React, { Component } from "react";
import api from "../../Environment";

class Logout extends Component {
  state = {};
  componentDidMount() {
    api.postMethod("logout").then((response) => {
      if (response.data.success) {
        // console.log("success");
      } else {
      }
    });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("userLoginStatus");
    localStorage.removeItem("username");
    localStorage.removeItem("user_picture");
    localStorage.removeItem("user_cover");
    localStorage.removeItem("no_of_users");
    localStorage.removeItem("no_of_minutes");
    this.props.history.push("/");
  }
  render() {
    return "";
  }
}

export default Logout;
