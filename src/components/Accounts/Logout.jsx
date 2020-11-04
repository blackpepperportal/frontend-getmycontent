import React, { useEffect } from "react";
import api from "../../Environment";

const Logout = (props) => {
  useEffect(() => {
    api.postMethod("logout").then((response) => {
      if (response.data.success) {
        console.log("success");
      } else {
      }
    });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("userLoginStatus");
    localStorage.removeItem("user_picture");
    localStorage.removeItem("username");
    props.history.push("/");
  }, []);
  return "";
};

export default Logout;
