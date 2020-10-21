import React from "react";

const ModelProfileTabSec = (props) => {
  return (
    <ul className="nav nav-tabs" role="tablist">
      <li
        role="presentation"
        className={props.activeSec === "post" ? "active" : ""}
      >
        <a
          href="#Section1"
          aria-controls="home"
          role="tab"
          data-toggle="tab"
          onClick={() => props.setActiveSec("post")}
        >
          <img src="assets/images/icons/post.svg" className="svg-clone" />
        </a>
      </li>
      <li
        role="presentation"
        className={props.activeSec === "photo" ? "active" : ""}
      >
        <a
          href="#Section2"
          aria-controls="profile"
          role="tab"
          data-toggle="tab"
          onClick={() => props.setActiveSec("photo")}
        >
          <img src="assets/images/icons/gallery.svg" className="svg-clone" />
        </a>
      </li>
      <li
        role="presentation"
        className={props.activeSec === "video" ? "active" : ""}
      >
        <a
          href="#Section3"
          aria-controls="messages"
          role="tab"
          data-toggle="tab"
          onClick={() => props.setActiveSec("video")}
        >
          <img src="assets/images/icons/video.svg" className="svg-clone" />
        </a>
      </li>
      <li
        role="presentation"
        className={props.activeSec === "archive" ? "active" : ""}
      >
        <a
          href="#Section4"
          aria-controls="messages"
          role="tab"
          data-toggle="tab"
          onClick={() => props.setActiveSec("archive")}
        >
          <img src="assets/images/icons/archive.svg" className="svg-clone" />
        </a>
      </li>
    </ul>
  );
};

export default ModelProfileTabSec;
