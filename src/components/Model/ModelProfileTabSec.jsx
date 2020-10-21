import React from "react";

const ModelProfileTabSec = (props) => {
  return (
    <ul class="nav nav-tabs" role="tablist">
      <li
        role="presentation"
        class={props.activeSec === "post" ? "active" : ""}
      >
        <a
          href="#Section1"
          aria-controls="home"
          role="tab"
          data-toggle="tab"
          onClick={() => props.setActiveSec("post")}
        >
          <img src="assets/images/icons/post.svg" class="svg-clone" />
        </a>
      </li>
      <li
        role="presentation"
        class={props.activeSec === "photo" ? "active" : ""}
      >
        <a
          href="#Section2"
          aria-controls="profile"
          role="tab"
          data-toggle="tab"
          onClick={() => props.setActiveSec("photo")}
        >
          <img src="assets/images/icons/gallery.svg" class="svg-clone" />
        </a>
      </li>
      <li
        role="presentation"
        class={props.activeSec === "video" ? "active" : ""}
      >
        <a
          href="#Section3"
          aria-controls="messages"
          role="tab"
          data-toggle="tab"
          onClick={() => props.setActiveSec("video")}
        >
          <img src="assets/images/icons/video.svg" class="svg-clone" />
        </a>
      </li>
      <li
        role="presentation"
        class={props.activeSec === "archive" ? "active" : ""}
      >
        <a
          href="#Section4"
          aria-controls="messages"
          role="tab"
          data-toggle="tab"
          onClick={() => props.setActiveSec("archive")}
        >
          <img src="assets/images/icons/archive.svg" class="svg-clone" />
        </a>
      </li>
    </ul>
  );
};

export default ModelProfileTabSec;
