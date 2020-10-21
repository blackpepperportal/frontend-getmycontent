import React from "react";

const ModelProfileVideoSec = (props) => {
  return (
    <div
      role="tabpanel"
      className={
        props.activeSec === "video"
          ? "tab-pane fade in active"
          : "tab-pane fade"
      }
      id="Section3"
    >
      <ul className="box-container three-cols">
        <li className="box">
          <div className="inner">
            <a href="assets/images/videos/demo-1.mp4" className="glightbox3">
              <img src="assets/images/g-4.jpg" alt="image" />
            </a>
          </div>
        </li>
        <li className="box">
          <div className="inner">
            <a href="assets/images/videos/demo-2.mp4" className="glightbox3">
              <img src="assets/images/g-2.jpg" alt="image" />
            </a>
          </div>
        </li>
        <li className="box">
          <div className="inner">
            <a href="assets/images/videos/demo-1.mp4" className="glightbox3">
              <img src="assets/images/g-3.jpg" alt="image" />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ModelProfileVideoSec;
