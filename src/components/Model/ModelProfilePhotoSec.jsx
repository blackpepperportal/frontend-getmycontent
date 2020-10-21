import React from "react";

const ModelProfilePhotoSec = (props) => {
  return (
    <div
      role="tabpanel"
      className={
        props.activeSec === "photo"
          ? "tab-pane fade in active"
          : "tab-pane fade"
      }
      id="Section2"
    >
      <ul className="box-container three-cols">
        <li className="box">
          <div className="inner">
            <a href="assets/images/g-6.jpg" className="glightbox">
              <img src="assets/images/g-6.jpg" />
            </a>
          </div>
        </li>
        <li className="box">
          <div className="inner">
            <a href="assets/images/g-5.jpg" className="glightbox">
              <img src="assets/images/g-5.jpg" />
            </a>
          </div>
        </li>
        <li className="box">
          <div className="inner">
            <a href="assets/images/g-4.jpg" className="glightbox">
              <img src="assets/images/g-4.jpg" />
            </a>
          </div>
        </li>
        <li className="box">
          <div className="inner">
            <a href="assets/images/g-3.jpg" className="glightbox">
              <img src="assets/images/g-3.jpg" />
            </a>
          </div>
        </li>
        <li className="box">
          <div className="inner">
            <a href="assets/images/g-2.jpg" className="glightbox">
              <img src="assets/images/g-2.jpg" />
            </a>
          </div>
        </li>
        <li className="box">
          <div className="inner">
            <a href="assets/images/g-1.jpg" className="glightbox">
              <img src="assets/images/g-1.jpg" />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ModelProfilePhotoSec;
