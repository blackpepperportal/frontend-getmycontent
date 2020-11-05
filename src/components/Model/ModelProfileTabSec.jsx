import React from "react";
import { Link } from "react-router-dom";
import { Image, Media } from "react-bootstrap";

const ModelProfileTabSec = (props) => {
  return (
    <ul className="nav nav-tabs modal-profile-tabs" role="tablist">
      <Media
        as="li"
        role="presentation"
        className={props.activeSec === "post" ? "active" : ""}
      >
        <Link
          to="#Section1"
          aria-controls="home"
          role="tab"
          data-toggle="tab"
          onClick={(event) => props.setActiveSection(event, "post")}
        >
          <Image
            src={window.location.origin + "/assets/images/icons/post.svg"}
            className="svg-clone"
          />
        </Link>
      </Media>
      <Media
        as="li"
        role="presentation"
        className={props.activeSec === "photo" ? "active" : ""}
      >
        <Link
          to="#Section2"
          aria-controls="profile"
          role="tab"
          data-toggle="tab"
          onClick={(event) => props.setActiveSection(event, "photo")}
        >
          <Image
            src={window.location.origin + "/assets/images/icons/gallery.svg"}
            className="svg-clone"
          />
        </Link>
      </Media>
      <Media
        as="li"
        role="presentation"
        className={props.activeSec === "video" ? "active" : ""}
      >
        <Link
          to="#Section3"
          aria-controls="messages"
          role="tab"
          data-toggle="tab"
          onClick={(event) => props.setActiveSection(event, "video")}
        >
          <Image
            src={window.location.origin + "/assets/images/icons/video.svg"}
            className="svg-clone"
          />
        </Link>
      </Media>
    </ul>
  );
};

export default ModelProfileTabSec;
