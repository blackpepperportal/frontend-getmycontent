import React from "react";

const ModelProfilePhotoSec = (props) => {
  return (
    <div
      role="tabpanel"
      class={
        props.activeSec === "photo"
          ? "tab-pane fade in active"
          : "tab-pane fade"
      }
      id="Section2"
    >
      <ul class="box-container three-cols">
        <li class="box">
          <div class="inner">
            <a href="assets/images/g-6.jpg" class="glightbox">
              <img src="assets/images/g-6.jpg" />
            </a>
          </div>
        </li>
        <li class="box">
          <div class="inner">
            <a href="assets/images/g-5.jpg" class="glightbox">
              <img src="assets/images/g-5.jpg" />
            </a>
          </div>
        </li>
        <li class="box">
          <div class="inner">
            <a href="assets/images/g-4.jpg" class="glightbox">
              <img src="assets/images/g-4.jpg" />
            </a>
          </div>
        </li>
        <li class="box">
          <div class="inner">
            <a href="assets/images/g-3.jpg" class="glightbox">
              <img src="assets/images/g-3.jpg" />
            </a>
          </div>
        </li>
        <li class="box">
          <div class="inner">
            <a href="assets/images/g-2.jpg" class="glightbox">
              <img src="assets/images/g-2.jpg" />
            </a>
          </div>
        </li>
        <li class="box">
          <div class="inner">
            <a href="assets/images/g-1.jpg" class="glightbox">
              <img src="assets/images/g-1.jpg" />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ModelProfilePhotoSec;
