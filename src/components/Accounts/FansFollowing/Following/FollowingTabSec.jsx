import React from "react";
import { Link } from "react-router-dom";
import { Image, Media } from "react-bootstrap";

const FollowingTabSec = (props) => {
  return (
    <ul className="nav nav-tabs following-tab-sec" role="tablist">
      <Media
        as="li"
        role="presentation"
        className={props.activeSec === "active-sec" ? "active" : ""}
      >
        <Link
          to="#Section1"
          aria-controls="home"
          role="tab"
          data-toggle="tab"
          onClick={() => props.setActiveSec("active-sec")}
        >
          <Image
            src="assets/images/icons/tick-circle.svg"
            className="svg-clone"
          />
          <span className="tab-nav-item"> Active </span>
        </Link>
      </Media>
      <Media
        as="li"
        role="presentation"
        className={props.activeSec === "expired-sec" ? "active" : ""}
      >
        <Link
          to="#Section2"
          aria-controls="profile"
          role="tab"
          data-toggle="tab"
          onClick={() => props.setActiveSec("expired-sec")}
        >
          <Image src="assets/images/icons/warning.svg" className="svg-clone" />
          <span className="tab-nav-item"> Expired </span>
        </Link>
      </Media>
      <Media
        as="li"
        role="presentation"
        className={props.activeSec === "all-sec" ? "active" : ""}
      >
        <Link
          to="#Section3"
          aria-controls="messages"
          role="tab"
          data-toggle="tab"
          onClick={() => props.setActiveSec("all-sec")}
        >
          <Image src="assets/images/icons/all.svg" className="svg-clone" />
          <span className="tab-nav-item"> All </span>
        </Link>
      </Media>
    </ul>
  );
};

export default FollowingTabSec;
