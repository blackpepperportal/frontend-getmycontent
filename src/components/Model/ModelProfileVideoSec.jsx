import React from "react";

const ModelProfileVideoSec = (props) => {
  return (
    <div
      role="tabpanel"
      class={
        props.activeSec === "video"
          ? "tab-pane fade in active"
          : "tab-pane fade"
      }
      id="Section3"
    >
      <ul class="box-container three-cols">
        <li class="box">
          <div class="inner">
            <a href="assets/images/videos/demo-1.mp4" class="glightbox3">
              <img src="assets/images/g-4.jpg" alt="image" />
            </a>
          </div>
        </li>
        <li class="box">
          <div class="inner">
            <a href="assets/images/videos/demo-2.mp4" class="glightbox3">
              <img src="assets/images/g-2.jpg" alt="image" />
            </a>
          </div>
        </li>
        <li class="box">
          <div class="inner">
            <a href="assets/images/videos/demo-1.mp4" class="glightbox3">
              <img src="assets/images/g-3.jpg" alt="image" />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ModelProfileVideoSec;
